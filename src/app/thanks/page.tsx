'use client'

import Confetti from 'react-confetti'

const ContactUsThankYouPage = () => {

  
  return (
    <div className='flex items-center justify-center my-auto h-[70vh]'>
      <Confetti className='w-[90em] h-full text-lg'/>
      <h1
        className="text-center font-semibold text-3xl
      "
      >
        Thank you for your message!
      </h1>
      
      
    </div>
  )
}

export default ContactUsThankYouPage