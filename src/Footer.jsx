import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaApplePay, FaGooglePay } from "react-icons/fa"

function Footer() {
  return (
      <footer className='bg-gray-800 text-gray-500 text-center font-serif'>
        
        <div className='max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          <div>
            <h2 className='font-bold text-2xl mb-2 text-white'>Pop & Drop Vending</h2>
            <p className='mb-2 text-white'>Serving Orlando and Surrounding Areas Since 2023</p>
          </div>

          <div className='md:text-right'>
            <h3 className='font-bold text-sm'>Contact Us</h3>

            <a className='hover:underline text-white transition text-sm'>
              Email: <a href="mailto:Contact@Pop&DropVending.com">Contact@Pop&DropVending.com</a>
            </a>

            <p className='hover:underline text-white transition text-sm'>
              Phone: <a href="tel:4075555555">(407) 555-5555</a>
            </p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-3xl max-w-6xl mx-auto px-6 pb-4">
          <span className="text-xs text-gray-500 uppercase tracking-widest">We Accept:</span>
          <FaApplePay className="h-8 text-white hover:scale-110 transition cursor-pointer" />
          <FaGooglePay className="h-8 text-white hover:scale-110 transition cursor-pointer" />
          <FaCcVisa className="h-8 text-blue-700 hover:scale-110 transition cursor-pointer" />
          <FaCcMastercard className="h-8 text-red-500 hover:scale-110 transition cursor-pointer" />
          <FaCcAmex className="h-8 text-blue-500 hover:scale-110 transition cursor-pointer" />
        </div>

        <div className='text-center text-gray-400 text-sm border-t border-gray-700 py-4'>
          © {new Date().getFullYear()} Pop & Drop Vending. All rights reserved
        </div>

      </footer>
  )
}

export default Footer;