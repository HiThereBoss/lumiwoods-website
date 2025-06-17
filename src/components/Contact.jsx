export default function Contact() {
  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <h1 className='text-4xl font-bold text-custom-blue mt-10'>Contact Us</h1>
        <p className='text-lg text-custom-blue my-4'>We would love to hear from you!</p>
        <p>
          Team lead: <a href='mailto:test@gmail.com' className='text-custom-blue underline'>Email to be added</a>
        </p>
      </div>
    </div>
  )
}