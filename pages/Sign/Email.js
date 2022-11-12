import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-10">
          <div>           
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">            
             What is your Email
            </h2>            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>               
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>             
            </div>          

            <div>
             <Link href={'/Sign/Phone'}><button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >               
                Next
              </button></Link> 
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Email
