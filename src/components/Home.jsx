import Hero from "./Hero"
import Info from "./Info"
import Preview from "./Preview"

function Home() {
  return (
    <div className='flex flex-col space-y-16 lg:h-[90vh] lg:overflow-y-scroll'>
      <Hero />
      <Info />
      <Preview />
      
    </div>
  )
}

export default Home