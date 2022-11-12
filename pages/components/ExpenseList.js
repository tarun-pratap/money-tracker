import React, { useEffect, useState } from 'react'
import AddExpense from './AddExpense';
import Footer from './Footer';
import Navbar from './Navbar';
import Note from './Note';
import styles from '../../styles/Load.module.css'

function ExpenseList() {

    const [spin, set] = useState(false);
    
    useEffect(()=> {
        setInterval(() => {
            set(true);
        }, 2000);       
    },[])

    const [setExpense, showExpense] = useState([]);

    function addExpense(info){
        showExpense((prevData) => {
            return [...prevData , info];
        })
    }

    function deleteExpense(id){
        showExpense((delExpense) => {
            return delExpense.filter((ele,index)=>{
                return index !== id;
            })
        })
    }
  return (
    <>
    {spin ? <> <Navbar />
        <AddExpense add = {addExpense} />

            {setExpense.map((val, index) => {
                return <Note
                    key = {index}
                    id = {index}
                    amount = {val.amount}
                    category = {val.category}                    
                    date = {val.date}
                    message = {val.message}                    
                    del = {deleteExpense}                    
                />
            })}
    <Footer /></> : <div class={styles.container}>
  <div class={styles.load}>
    <div class={styles.linespinner}></div>
  </div>
</div>}   
    </>
  )
}

export default ExpenseList
