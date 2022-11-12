import Link from 'next/link';
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../../styles/Banner.module.css'

function Investing() {

  return (
    <>

      <Navbar />

      <section class={`text-gray-600 px-10 body-font ${styles.gradient}`}>
        <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Start
              <br class="hidden lg:inline-block" />Investing
            </h1>
            <p class="mb-6 leading-relaxed text-black">We have made investing easy with expert guidance and suggestions. If you are new to investing, don't worry we also have training programs</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-zinc-700 border-0 py-2 px-6 shadow-2xl focus:outline-none hover:bg-zinc-900 rounded text-lg">Get Started</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="/invest.jpg" />
          </div>
        </div>
      </section>

      <section className='px-10'>
        <div className='flex justify-center items-center mt-10'>
          <h1 className='text-3xl'>Our Advisory Service</h1>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <div className='h-56 bg-gradient-to-r from-pink-600 to-yellow-400' style={{ width: "43rem" }}>
            <div className='mt-2 ml-2 text-xl bg-zinc-800 text-white flex justify-center items-center h-52' style={{ width: "42rem" }}>Our Investment Advisory service is an online resource <br /> for those who are starting their investment journey. <br />We provide recommedations to the people according <br /> to their risk appetite, age group and monthly savings</div>
          </div>
        </div>
        <div class="flex justify-center">
          <Link href={'/components/Service'}><button class="inline-flex mt-6 mb-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try Our Service</button></Link>
      </div>
      </section>
    <Footer />
    </>
  )
}

export default Investing
