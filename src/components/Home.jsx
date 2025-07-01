import Hero from "./Hero";
import Info from "./Info";
import Preview from "./Preview";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <div className="flex flex-col space-y-16 bg-parchment text-gamebrown min-h-screen">
      <Hero />
      <Info />
      <div className="mt-8">
        <Preview />
      </div>
      <FAQ />
      <footer className="flex justify-center items-center border-t border-[#E3D6C5] mt-4">
        <p className="text-forestgreen text-[14px] lg:text-[18px] font-main py-6">
          © 2025 Lumiwoods. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
