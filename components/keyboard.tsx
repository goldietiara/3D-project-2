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
        .load("https://prod.spline.design/aWTHzrf7Pqnw6OLm/scene.splinecode")
        .then(() => {
          const keyboard = app.findObjectByName("keyboard");

          if (keyboard) {
            gsap.set(keyboard.rotation, {
              x: -0,
              y: -0,
              z: Math.PI / 2,
            });
            gsap.set(keyboard.scale, { x: 1.4, y: 1.4, z: 1.4 });
            gsap.set(keyboard.position, { x: 400, y: -50 });

            let rotateKeyboard = gsap.to(keyboard.rotation, {
              x: -0,
              y: Math.PI * 2 + keyboard.rotation.y,
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
                    }, 3600);

                    rotateKeyboard.pause();
                    gsap.to(keyboard.rotation, {
                      y: Math.PI / 2,
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
              .to(
                keyboard.rotation,
                { x: -0, y: Math.PI / 1.6, z: Math.PI / 2 },
                0
              )
              .to(keyboard.position, { x: -300, y: 0 }, 0);
            gsap.set(keyboard.scale, { x: 1.4, y: 1.4, z: 1.4 });

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
              .to(
                keyboard.rotation,
                { x: -0, y: Math.PI / 2.8, z: Math.PI / 2 },
                0
              )
              .to(keyboard.position, { x: 300, y: 0 }, 0);
            gsap.set(keyboard.scale, { x: 1.4, y: 1.4, z: 1.4 });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: "#section4",
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: true,
                },
              })
              .to(keyboard.rotation, { x: 0.4, y: 0.3, z: 0 }, 0)
              .to(keyboard.position, { x: 0, y: 0 }, 0)
              .to(keyboard.scale, { x: 1, y: 1, z: 1 }, 0);
          }
        });
    }
  }, []);

  return <canvas className=" w-fit h-fit" ref={canvasRef} id="canvas3d" />;
}
