import Link from 'next/link'
import React, { useState } from 'react'

function Phone() {

  const [text, getText] = useState("Register");
  const [color, setColor] = useState("bg-indigo-600")
  const [hover, sethover] = useState("bg-indigo-700")
  const [disable, set] = useState(false);
  const [bool, get] = useState(false);

  function verify(){
    getText("Wait while signing you in...");
    set(true);
    setTimeout(() => {
      get(true);
      getText("Registered Successfully");
      setColor("bg-emerald-500");
      sethover("bg-emerald-600");
    }, 2000);
  }

  return (
    <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mt-10">
          <div>           
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Last One <br />
              <p className='mt-1'>What is your phone number ?</p>
            </h2>            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>               
                <input
                  id="email-address"
                  name="email"
                  type="phone"
                  autoComplete="of"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>             
            </div>          

            <div>
            <button
                type="submit"
                className={`group relative flex w-full justify-center rounded-md border border-transparent ${color} py-2 px-4 text-sm font-medium text-white hover:${hover} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`} onClick={verify} disabled = {disable}
              >               
                {text}
              </button>

              {bool && <Link href={'/components/Home'}><button
                type="submit"
                className="group relative mt-2 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >               
                Go to Home
              </button></Link> }             
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Phone
