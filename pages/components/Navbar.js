import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
<header class="body-font bg-zinc-700 text-white sticky top-0 z-50">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky top-0 z-50">
    <Link href={'/components/Home'} legacyBehavior><a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">      
      <span class="ml-3 text-xl text-white">Money Tracker</span>
    </a></Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">How it Works</a>
      <Link href={'/components/Investing'} legacyBehavior><a class="mr-5 hover:text-gray-900">Investing</a></Link>
      <Link href={'/components/Saving'} legacyBehavior><a class="mr-5 hover:text-gray-900">Savings</a></Link>
      <Link href={'/components/Expense'} legacyBehavior><a class="mr-5 hover:text-gray-900">Expenses</a></Link>
    </nav>
    <button class="mr-1 inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard      
    </button>
    <Link href={'/Sign/Name'}><button class="ml-1 inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></Link>
  </div>
</header>
  )
}

export default Navbar
