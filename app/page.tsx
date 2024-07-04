import Image from "next/image";

export default function Home() {
  return (
    <main className=" font-mono font-light relative text-white bg-blue-600">
      <nav className="w-full px-6 py-4 bg-black text-white flex justify-between leading-5 text-lg fixed top-0">
        <div>3D Project - 2</div>
        <div>More Portofolio</div>
      </nav>
      <section className=" h-screen w-full flex px-5 items-center">
        <h1 className=" flex flex-col gap-5 text-9xl font-extrabold">
          <p>
            <span>Click</span> <span>Clack</span>
          </p>
          <p>Perfect</p>
          <p>Precision</p>
          <p>Keyboard</p>
        </h1>
      </section>

      <section className=" h-screen w-full px-10">
        <div className=" w-1/3 h-full pt-40 flex flex-col gap-6 items-center">
          <h1 className=" font-semibold text-4xl pb-20">
            CUSTOMIZE ALL THE WAY.
          </h1>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>
          <div className="w-full text-center py-4 px-8 border-white border-[1px]">
            Customize a Keyboard
          </div>
        </div>
      </section>
      <section className=" h-screen w-full px-10 flex justify-end">
        <div className=" w-1/3 h-full pt-40 flex flex-col gap-6 items-center">
          <h1 className=" font-semibold text-4xl pb-20">
            CUSTOMIZE ALL THE WAY.
          </h1>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>
          <div className="w-full text-center py-4 px-8 border-white border-[1px]">
            Customize a Keyboard
          </div>
        </div>
      </section>
      <section className=" h-screen w-full px-10 flex justify-end bg-black">
        <div className=" w-1/3 h-full pt-40 flex flex-col gap-6 items-center">
          <h1 className=" font-semibold text-4xl pb-20">
            CUSTOMIZE ALL THE WAY.
          </h1>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>
          <div className="w-full text-center py-4 px-8 border-white border-[1px]">
            Customize a Keyboard
          </div>
        </div>
      </section>
    </main>
  );
}
