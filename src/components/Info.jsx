import { infoCards } from "@/data/data"
import InfoCard from "./InfoCard"

function Info() {
  return (
    <div className='flex flex-col p-8 lg:h-[90vh] justify-center snap-start'
    >
        <div className='max-w-5xl ml:5 lg:ml-20 mt-10'>
            <p className='text-custom-blue text-[15px] lg:text-[30px] font-main max-w-4xl'>
                At ZenKids, we're on a mission to help children manage stress and anxiety
                through a science-backed mobile game designed with specific attention to their needs.
            </p>
        </div>
        <div className='flex flex-col items-center md:p-8'>
          <h3 className='text-custom-blue font-extrabold text-[30px] lg:text-[50px] font-main-bold pt-8 mt-4' >
              What we offer
          </h3>   
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
              {infoCards.map((card, idx) => (
                  <InfoCard
                      key={idx}
                      title={card.title}
                      desc={card.desc}
                      src={card.src}
                  />
              ))}
          </div>
      </div>
        
    </div>
  )
}

export default Info