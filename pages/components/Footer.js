import React from 'react'

function Footer() {
  return (
    <footer class="text-white body-font bg-zinc-700">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Get To Know Us</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Working</a>
          </li>          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Features</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Apply For Loan</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Track Expenses</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Start Investing</a>
          </li>          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Help</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">FAQs</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Community Guidelines</a>
          </li>          
          <li>
            <a class="text-white hover:text-gray-800">Privacy Policy</a>
          </li>          
          <li>
            <a class="text-white hover:text-gray-800">Terms & Conditions</a>
          </li>          
          <li>
            <a class="text-white hover:text-gray-800">Contact Us</a>
          </li>          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-lg text-white">Newsletter</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
        </div>
        <p class="text-gray-400 text-lg mt-2 md:text-left text-center">You will receive info about 
          <br class="lg:block hidden" />events on your email
        </p>
      </div>
    </div>
  </div>
  <div class="bg-zinc-900">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">       
        <span class="ml-3 text-xl">Money Tracker</span>
      </a>
      <p class="text-xl text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 — 4 Pointers        
      </p>    
    </div>
  </div>
</footer>
  )
}

export default Footer
