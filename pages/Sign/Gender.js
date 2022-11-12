import Link from 'next/link'
import React from 'react'

function Gender() {
  return (
    <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-10">
          <div>           
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              What is your Gender ?
            </h2>            
          </div>
          <div className='flex justify-center items-center'>
          <Link href={'/Sign/Email'}><img
          className="inline-block h-32 w-32 rounded-full ring-2 ring-white"
          src="/male.png"
          alt=""
        /> </Link>
          <Link href={'/Sign/Email'}><img
          className="inline-block ml-12 h-32 w-32 rounded-full ring-2 ring-white"
          src="/female.jpg"
          alt=""
        /> </Link>
        </div>                
        </div>
      </div>
    </>
  )
}

export default Gender
