import { infoCards } from "@/data/data"
import InfoCard from "./InfoCard"

function Info() {
  return (
    <div className='flex flex-col 2xl:flex-row p-8 lg:h-[90vh] justify-center'
    >
        <div className='flex flex-col max-w-5xl mt-10 ml:5 lg:ml-20 xl:max-w-xl xl:justify-center'>
            <p className='text-custom-blue text-[15px] lg:text-[30px] font-main'>
                At Lumiwoods, we're on a mission to help children manage stress and anxiety
                through a science-backed mobile game designed with specific attention to their needs.
            </p>
        </div>
        <div className='flex flex-col items-center md:p-8 xl:pt-0'>
          <h3 className='text-custom-blue font-extrabold text-[30px] lg:text-[50px] font-main-bold mt-4 xl:mt-0 xl:pt-0' >
              What we offer
          </h3>   
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
              {infoCards.map((card, idx) => (
                  <InfoCard
                      key={idx}
                      title={card.title}
                      desc={card.desc}
                      src={card.src}
                      emoji={card.emoji}
                  />
              ))}
          </div>
      </div>
        
    </div>
  )
}

export default Info