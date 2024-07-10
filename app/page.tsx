import Keyboard from "@/components/keyboard";
import LandingPage from "@/components/landing-page";

export default function Home() {
  return (
    <main className=" font-mono font-light relative text-white bg-blue-600">
      <div className=" fixed top-0 left-0 z-50 h-full w-full">
        <Keyboard />
      </div>
      <LandingPage />
    </main>
  );
}
