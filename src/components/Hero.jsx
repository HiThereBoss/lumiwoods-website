import hero from '../assets/images/hero-graphic.png';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row p-8 h-[90vh] pt-30 snap-start'
    >
        <div className='max-w-5xl ml-5 lg:ml-50 lg:h-[90vh] flex flex-col'>
            <p className='text-custom-blue font-extrabold text-[20px] md:text-[30px] lg:text-[50px] font-main-bold'>
                From Wiggles to Zen Giggles—
            </p>
            <p className='text-custom-blue text-[15px] md:text-[20px] lg:text-[40px] font-main max-w-4xl'>
                Calm young minds today, 
                and they'll conquer the storms of tomorrow.
            </p>
        </div>
        <div>
            <img 
                src={hero}
                alt='Hero Image' 
                className='w-[500px] mt-8 md:mt-0 xl:mx-20'
            />
        </div>
    </div>
  )
}

export default Hero