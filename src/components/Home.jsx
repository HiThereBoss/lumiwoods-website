import Hero from "./Hero"
import Info from "./Info"
import Preview from "./Preview"

function Home() {
  return (
    <div className='flex flex-col lg:h-[90vh] lg:overflow-y-scroll'>
      <Hero />
      <Info />
      <Preview />
      
    </div>
  )
}

export default Home