import Hero from "./Hero"
import Info from "./Info"
import Preview from "./Preview"

function Home() {
  return (
    <div className='flex flex-col space-y-16 lg:h-[90vh] lg:overflow-y-scroll'>
      <Hero />
      <Info />
      <div className="mt-15"><Preview /></div>
      <div className="flex justify-center items-center">
        <p className="text-custom-blue text-[15px] lg:text-[20px] font-main">
          © 2025 Lumiwoods. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Home