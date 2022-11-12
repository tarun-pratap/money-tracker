import React, { useEffect, useState } from 'react'
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../../styles/Load.module.css'

function Service() {

  const [spin, set] = useState(false);
    
    useEffect(()=> {
        setInterval(() => {
            set(true);
        }, 2000);       
    },[])

    const [info, setInfo] = useState({
        amount: "",
        category: "",
        date: "",
    })

    const [err, seterr] = useState("");
    const [bool, getBool] = useState(false);
    const [load, getLoad] = useState("See the options");
    const [disable, get] = useState(false);

    function validate(e){
        const val = e.target.value;
        const name = e.target.name;
 
        setInfo((currItem) => {
         return {
             ...currItem,
             [name]: val
        }})
     }

     function add(){
        if(info.amount === ""){
            seterr("** Please fill all details !!");
            return false;
        }
        else {
        getLoad("Fetching best options for you...");
        seterr("");
        get(true);
        setTimeout(() => {            
            getBool(true);
            getLoad("See Below");
        }, 2000);  
    }      
    }

    const data = {
        labels: [
          'Equity',
          'Debt',
          'FD\'s\''
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [80, 15, 5],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ]
        }]
      };

  return (
    <>
    {spin ? <>  <Navbar />
         <div className="overflow-hidden bg-white sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">Investment Advisory Service</h3>    
      </div>    
        <hr />   
      <div className='grid grid-cols-4 px-4 py-5 sm:px-6 gap-16'>
        <div>
            <h1>Monthly Income</h1>
            <input value={info.amount} type="number" id="email" autoComplete='of' name="amount" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate}></input>            
        </div>       
        <div>
        <h1>Age Group</h1>
        <select class="rounded border appearance-none border-gray-300 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>18-25</option>
                <option>26-32</option>
                <option>33-50</option>
                <option>50+</option>
              </select>
        </div>
        <div>
        <h1>Risk Appetite (on monthly income)</h1>
        <select class="rounded border appearance-none border-gray-300 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
                <option>40%</option>
              </select>           
        </div>
      </div>     
      <div className='px-4'>
      <p className='text-red-500 mb-4'>{err}</p>
      </div>
      
      <div className='flex px-4 sm:px-6'>
      <button class={`text-white mb-5 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`} disabled={disable} onClick={add}>{load}</button>
      </div>      
      </div>

      {bool && <><div className='px-5 mt-2 '>
        <p>(All values are in percentage of your monthly income)</p>
      </div><div style={{width: '40%', height: '40%'}} className="flex justify-center items-center ml-96 mt-5">
  <Doughnut
     data={data}
     options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      width={400}
  />
</div>
<section className='px-10'>
        <div className='flex justify-center items-center mt-10'>
          <h1 className='text-3xl'>Why are we suggesting this?</h1>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <div className='h-64 bg-gradient-to-r from-pink-600 to-yellow-400' style={{ width: "47rem" }}>
            <div className='mt-2 ml-2 p-4 text-xl bg-zinc-800 text-white flex justify-center items-center h-60' style={{ width: "46rem" }}>According to your age group and risk appetite, this is the best option we found for you. Your age group is 18-25 years, which means you are in early stages of your investment journey, so you can take more risk than others. Based on this concept, we are suggesting you to put maximum money (80%) in Equity which includes stocks, then 15% in debt and remaining 5% in Bank FD. Over the time this proportion will change as your risk appetite will change.</div>
          </div>
        </div>
        <div className='flex px-4 sm:px-6 mt-4 mb-10 justify-center'>
      <button class={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Start Investing With Us</button>
      </div>     
      </section></>}
      <Footer /> </>    : <div class={styles.container}>
  <div class={styles.load}>
    <div class={styles.linespinner}></div>
  </div>
</div>}
    </>
  )
}

export default Service
