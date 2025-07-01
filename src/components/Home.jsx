import FAQ from "./FAQ"
import Hero from "./Hero"
import Info from "./Info"
import Preview from "./Preview"
import FAQ from "./FAQ"

export default function Home() {
  return (
    <div className='flex flex-col space-y-10 bg-MG-100 text-MG-800 min-h-screen'>
      <Hero />
      <Info />
      <div className="mt-12"><Preview /></div>
      <FAQ />
      <div className="flex justify-center items-center">
        <p className="text-MG-700 text-[15px] lg:text-[20px] font-main py-6">
          © 2025 Lumiwoods. All rights reserved.
        </p>
      </div>
    </div>
  )
}