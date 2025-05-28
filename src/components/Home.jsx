import Hero from "./Hero"
import Info from "./Info"
import Offer from "./Offer"
import Preview from "./Preview"

function Home() {
  return (
    <div className='flex flex-col pb-100'>
      <Hero />
      <Info />
      <Offer />
      <Preview />
      
    </div>
  )
}

export default Home