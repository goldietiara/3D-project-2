"use client";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Keyboard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const app = new Application(canvas);
      app
        // .load("https://prod.spline.design/ZZOWNi4tS7p8xxOs/scene.splinecode")
        .load("https://prod.spline.design/aWTHzrf7Pqnw6OLm/scene.splinecode")
        .then(() => {
          const keyboard = app.findObjectByName("keyboard");

          if (keyboard) {
            gsap.set(keyboard.rotation, { x: -Math.PI / 14, z: Math.PI / 36 });
            gsap.set(keyboard.scale, { x: 1.7, y: 1.7, z: 1.7 });
            gsap.set(keyboard.position, { x: 400, y: -100 });

            let rotateKeyboard = gsap.to(keyboard.rotation, {
              y: Math.PI * 2 + keyboard.rotation.y,
              x: 0,
              z: 0,
              duration: 10,
              repeat: -1,
              ease: "none",
            });

            let rotationProgress = 0;
            let interval: any;

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: "#section2",
                  start: "top 60%",
                  end: "bottom bottom",
                  scrub: true,
                  onEnter: () => {
                    rotationProgress = rotateKeyboard.progress();

                    interval = setInterval(() => {
                      app.emitEvent("keyDown", "keyboard");
                    }, 1500);

                    rotateKeyboard.pause();
                    gsap.to(keyboard.rotation, {
                      y: Math.PI / 12,
                      duration: 1,
                    });
                  },
                  onLeaveBack: () => {
                    const newProgress = keyboard.rotation.y / (Math.PI * 2);
                    rotateKeyboard.progress(newProgress).resume();
                    clearInterval(interval);
                  },
                },
              })
              .to(keyboard.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
              .to(keyboard.position, { x: -300, y: -50 }, 0)
              .to(keyboard.scale, { x: 2.3, y: 2.3, z: 2.3 }, 0);

            gsap
              .timeline({
                onComplete: () => {
                  clearInterval(interval);
                  app.emitEvent("mouseDown", "keyboard");
                },
                scrollTrigger: {
                  trigger: "#section3",
                  start: "top bottom",
                  end: "center bottom",
                  scrub: true,
                },
              })
              .to(keyboard.rotation, { x: Math.PI / 36, y: -Math.PI / 10 }, 0)
              .to(keyboard.position, { x: 150, y: 50 }, 0)
              .to(keyboard.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0);

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: "#section4",
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: true,
                },
              })
              .to(keyboard.position, { x: 0, y: 100 }, 0)
              .to(keyboard.scale, { x: 1, y: 1, z: 1 }, 0);
          }
        });
    }
  }, []);

  return <canvas className=" w-fit h-fit" ref={canvasRef} id="canvas3d" />;
}
