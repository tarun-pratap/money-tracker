import React, { useEffect, useState } from 'react'
import AddSaving from './AddSaving';
import Footer from './Footer';
import Navbar from './Navbar';
import Note2 from './Note2';
import styles from '../../styles/Load.module.css'

function SavingList() {

    const [spin, set] = useState(false);
    
    useEffect(()=> {
        setInterval(() => {
            set(true);
        }, 2000);       
    },[])

    const [setSaving, showSaving] = useState([]);
    const [day, getDay] = useState(0);  
    const [total, getTotal] = useState(0);  

    function addSaving(info){
        showSaving((prevData) => {
          return [...prevData , info];
      })
      getDay(day + 1);
      getTotal(parseInt(total)+10);      
    }

    function deleteSaving(id){
        showSaving((delSaving) => {
            return delSaving.filter((ele,index)=>{
                return index !== id;
            })
        })
        getDay(day - 1);
        getTotal(parseInt(total)-10);
    }

  return (
    <> 
    {spin ? <><Navbar />
    <div className='text-3xl flex justify-center mt-8 mb-10'>
        <h1>Save Rs 10 Daily</h1>
</div>
<hr />
        <AddSaving add ={addSaving} />

            {setSaving.map((val,index) => {
                return <Note2
                    key = {index}
                    id = {index}
                    amount = {val.amount}                                     
                    date = {val.date}                                       
                    del = {deleteSaving}
                    day = {day}  
                    total = {total}                  
                />
            })}  
            <br />
    <Footer /> </> :  <div class={styles.container}>
  <div class={styles.load}>
    <div class={styles.linespinner}></div>
  </div>
</div>}                 
    </>
  )
}

export default SavingList
