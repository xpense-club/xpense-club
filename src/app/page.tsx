import Image from "next/image";
import Logo from "@/assets/xpense-full.svg";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-start">
      <header className="w-full bg-primaryDark align-center bg-red-300 flex justify-center">
        <div className="w-full max-w-5xl">
          <Image src={Logo} alt="Xpense Logo" width={250} />
        </div>
      </header>
    </main>
  );
}
