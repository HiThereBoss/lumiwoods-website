import logo from '../assets/images/Bunny.png'

export default function ProfileCard({ name, bio, image, style }) {
    return (
        <div className='bg-MG-50 opacity-0 flex flex-col my-5 mx-10 w-[300px] items-center animate-fade-in border border-MG-200 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out'
            style={style}>
            <div className="h-[200px] w-full flex items-center justify-center p-2">
                <img 
                src={logo}
                alt={`${name}'s profile`}
                className='h-full object-cover rounded-lg shadow-sm'
                />
            </div>
            <div className='w-full mt-5 px-3'>
                <h3 className='text-MG-700 text-center font-extrabold text-[30px] font-main-bold'>
                    {name}
                </h3>
                <p className='text-[15px] mt-3 text-center font-main'>
                    {bio}
                </p>
            </div>
        </div>
    )
}