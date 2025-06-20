import logo from '../assets/images/Bunny.png'

function ProfileCard({ name, bio, image, style }) {
    return (
        <div className='opacity-0 flex flex-col my-5 mx-10 w-[300px] items-center animate-fade-in'
            style={style}>
            <div className="h-[200px] w-full flex items-center justify-center p-2">
                <img 
                src={logo}
                alt={`${name}'s profile`}
                className='h-full object-cover'
                />
            </div>
            <div className='w-full mt-5 px-3'>
                <h3 className='text-custom-blue text-center font-extrabold text-[30px] font-main-bold'>
                    {name}
                </h3>
                <p className='text-[15px] mt-3 text-center font-main'>
                    {bio}
                </p>
            </div>
        </div>
    )
}

export default ProfileCard