import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../../styles/Banner.module.css'

function Saving() {
  return (
    <>
      <Navbar />

      <section class={`text-gray-600 px-10 body-font ${styles.gradient}`}>
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">Start
        <br class="hidden lg:inline-block" />Saving Daily
      </h1>
      <p class="mb-8 leading-relaxed text-black">Many people take no care of their money till they come nearly to the end of it. We should save a little bit daily</p>
      <div class="flex justify-center">
        <Link href={'/components/Saving'}><button class="inline-flex text-white bg-zinc-700 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 rounded text-lg">Start Saving</button></Link>    
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/save.jpg" />
    </div>    
  </div>  
    </section>

    {/* Advantage Section */}
    
    <section>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl mt-24 font-semibold'>Advantages of Savings</h1>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-auto bg-gradient-to-r from-emerald-600 to-emerald-400 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-justify relative">                 
          <p class="leading-relaxed mb-3 text-xl font-bold text-white">Your savings can be the answer to a number of your goals. You can buy a house, accumulate funds for your retirement, or purchase a vehicle.</p>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-auto bg-gradient-to-r from-amber-500 to-amber-400 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">         
          <p class="leading-relaxed mb-3 text-xl font-bold text-white">With a considerable amount of savings, you can fuel your children’s dreams and pay for the best schools and colleges across the world.</p>          
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-auto bg-gradient-to-r from-sky-500 to-sky-400 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <p class="leading-relaxed mb-3 text-xl font-bold text-white">In unfortunate times, your savings can act as a cushion for your loved ones and help them overcome any financial difficulty. <br /> <br /></p>          
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </section>

    {/* Saving Rs100 */}

    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl mt-12 font-semibold mb-3'>New Feature</h1>
        <p>With our new Save Rs10 daily feature, you can daily save 10. Just click below and make an entry</p>
        <div className='flex px-4 sm:px-6 flex-row'>
      <Link href={'/components/SavingList'}><button class={`text-white mb-10 bg-indigo-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Try this feature</button></Link>  
      </div> 
        </div>    
      <Footer />
    </>
  )
}

export default Saving
