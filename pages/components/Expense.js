import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../../styles/Banner.module.css'

function Expense() {
  return (
    <>
      <Navbar />

      <section class={`text-gray-600 px-10 body-font ${styles.gradient}`}>
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">Free
        <br class="hidden lg:inline-block" />Expense Tracker
      </h1>
      <p class="mb-8 leading-relaxed">We are your personal expense manager. Here you can add every single penny you are using with simple interface. Just click below to add your first expense</p>
      <div class="flex justify-center">
        <Link href={'/components/ExpenseList'}><button class="inline-flex text-white bg-zinc-700 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-900 rounded text-lg">Add Expense</button></Link>    
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/expense.jpg" />
    </div>    
  </div>  
</section>

      <Footer />
    </>
  )
}

export default Expense
