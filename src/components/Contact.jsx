export default function Contact() {
  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <h1 className='text-4xl font-bold text-MG-700 mt-10'>Contact Us</h1>
        <p className='text-lg text-MG-500 my-4'>We would love to hear from you!</p>
        <p>
          Company Email: <a href='mailto:lumiwoods.net@gmail.com' className='text-MG-500 underline'>lumiwoods.net@gmail.com</a>
        </p>
      </div>
    </div>
  )
}