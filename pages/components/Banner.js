import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Banner.module.css'

function Banner() {
  return (
    <>
        <section class={`text-gray-600 px-10 body-font ${styles.gradient}`}>
  <div class="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Grow Your Money
      </h1>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">With Us
      </h1>
      <p class="mb-8 leading-relaxed text-black">No need to worry about expenses and investments, we have made tracking very simple</p>
      <div class="flex justify-center">
        <Link href={'/Sign/Name'}><button class="inline-flex text-white bg-zinc-700 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 rounded text-lg">Get Started</button></Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/banner.jpg" />
    </div>    
  </div>  
</section>
    </>
  )
}

export default Banner
