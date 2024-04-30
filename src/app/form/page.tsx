'use client'
import Link from "next/link"
import Confetti from 'react-confetti'


const page = () => {



  return (
    <>


      <div className="bg-purple-800 items-center flex justify-center w-full text-white">
        <strong>To get in touch with us you can</strong>
      </div>

      <form className="flex flex-col text-center justify-center items-center h-[80vh] gap-7">
        <Confetti className="hidden w-full h-[90vh] md:flex"/>
        <div className="border-4 md:p-11 rounded-xl">
          
          <ul>
            <li className='flex-wrap font-bold flex items-center'>
              <span className="text-3xl">Email Us:</span>
                <Link href={'mailto:munshastripe@gmail.com'} className='text-blue-600 font-bold ml-3'>
                  munshastripe@gmail.com
                </Link>
            </li>
          </ul>
          
        </div>
        
        <b>Or</b>

        <div className="border-4 md:p-11 rounded-xl">
          <ul>
            <li className='flex-wrap font-bold flex items-center'>
              <span className="text-3xl">Contact Us:</span>
              <Link href={'tel:+260963266937'} className='text-blue-600'>
              +260963266937
              </Link>
            </li>
          </ul>
          
        
        </div>


        
        
      </form>
    </>

    
  )
}

export default page