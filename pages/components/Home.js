import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import styles from '../../styles/Load.module.css'

function Home() {

  const [load, getLoad] = useState(false);
    
    useEffect(()=> {
        setInterval(() => {
            getLoad(true);
        }, 2000);       
    },[])

  return (
    <>

    {load ? <><Navbar />    
    <Banner />
   <Testimonial />
   <Footer /></> :  <div class={styles.container}>
  <div class={styles.load}>
    <div class={styles.linespinner}></div>
  </div>
</div>}
    
</>
  )
}

export default Home
