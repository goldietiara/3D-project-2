"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [barAnimation, setBarAnimation] = useState("w-0");
  const [animate2, setAnimate2] = useState("opacity-0");
  const [animate3, setAnimate3] = useState("opacity-0");
  const [animate4, setAnimate4] = useState("opacity-0");

  useEffect(() => {
    const handleScroll = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "section1") {
            console.log(1);
            setBarAnimation("w-0");
            setAnimate2("opacity-0");
            setAnimate3("opacity-0");
            setAnimate4("opacity-0");
          } else if (entry.target.id === "section2") {
            console.log(2);
            setBarAnimation("w-1/3");
            setAnimate2("opacity-100");
            setAnimate3("opacity-0");
            setAnimate4("opacity-0");
          } else if (entry.target.id === "section3") {
            console.log(3);
            setBarAnimation("w-2/3");
            setAnimate2("opacity-0");
            setAnimate3("opacity-100");
            setAnimate4("opacity-0");
          } else if (entry.target.id === "section4") {
            console.log(3);
            setBarAnimation("w-full");
            setAnimate2("opacity-0");
            setAnimate3("opacity-0");
            setAnimate4("opacity-100");
          }
        }
      });
    };

    const options = {
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver(handleScroll, options);

    const targets = document.querySelectorAll(
      "#section1, #section2, #section3, #section4"
    );
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main className=" font-mono font-light relative text-white bg-blue-600">
      <nav className="w-full px-6 py-4 bg-black text-white flex justify-between leading-5 text-lg fixed top-0 z-50">
        <div>3D Project - 2</div>
        <a
          href={
            "https://portfolio-2-goldietiaraidgmailcoms-projects.vercel.app/my-work"
          }
          target="_blank"
          className=" underline underline-offset-4 hover:cursor-pointer hover:text-blue-600 transition-all ease-out duration-150"
        >
          More Portofolio
        </a>
      </nav>
      <div
        className={`${barAnimation} h-screen bg-black fixed top-0 right-0 z-0 flex justify-center items-center transition-all ease-in-out duration-500`}
      ></div>
      <section
        className=" h-screen w-full flex px-5 items-center relative z-40"
        id="section1"
      >
        <h1 className=" flex flex-col gap-5 text-9xl font-extrabold">
          <p>
            <span>Click</span> <span>Clack</span>
          </p>
          <p>Perfect</p>
          <p>Precision</p>
          <p>Keyboard</p>
        </h1>
      </section>
      <section
        className={`${animate2} h-screen w-full flex justify-end relative z-40 transition-all ease-in delay-500 duration-150`}
        id="section2"
      >
        <div className=" w-1/3 h-full px-20 flex flex-col gap-6 items-center justify-center">
          <h1 className=" font-semibold text-4xl pb-10">
            CUSTOMIZE ALL THE WAY.
          </h1>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>
          <div className="w-full text-center py-4 px-8 rounded-md border-white/50 border-[1px] hover:border-white hover:cursor-pointer">
            Customize a Keyboard
          </div>
        </div>
      </section>
      <section
        className={`${animate3} h-screen w-full relative left-3 z-40 transition-all ease-in-out delay-500 duration-150`}
        id="section3"
      >
        <div className=" w-1/3 h-full pt-40 px-20 flex flex-col gap-6 items-center justify-center">
          <h1 className=" font-semibold text-4xl pb-10">
            CUSTOMIZE ALL THE WAY.
          </h1>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>
          <div className="w-full text-center py-4 px-8 rounded-md border-white/50 border-[1px] hover:border-white hover:cursor-pointer">
            Customize a Keyboard
          </div>
        </div>
      </section>
      <section
        className={`${animate4} h-screen w-full relative z-40 transition-all ease-in-out delay-500 duration-150 flex items-end justify-center`}
        id="section4"
      >
        <p className="pb-36">By Goldie Tiara </p>
      </section>
    </main>
  );
}
