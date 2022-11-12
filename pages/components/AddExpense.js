import React, { useState } from 'react'

function AddExpense(props) {

    const [loading, setLoading] = useState("Add Expense");
    const [disable, get] = useState(false);
    const [color, setColor] = useState("bg-indigo-500");
    const [hover, sethover] = useState("bg-indigo-600");
    const [info, setInfo] = useState({
        amount: "",
        category: "",
        date: "",
        message: ""
    })

    const [err, seterr] = useState("");

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
        if(info.amount === "" || info.category === "" || info.date === "" || info.message === ""){
            seterr("** Please fill all details !!");
            return false;
        }
        else {
        seterr("");        
        get(true);
        setLoading("Wait while adding...")
        setTimeout(() => {
          props.add(info);
          setLoading("Added");     
          setColor("bg-emerald-500");   
          sethover("bg-emerald-600");   
          setInfo({
            amount: "",
            category: "",
            date: "",
            message: ""
          })
        }, 2000); 
        setTimeout(() => {
            setLoading("Add More"); 
            setColor("bg-indigo-500");   
            sethover("bg-indigo-600");   
        }, 3000);
        }
    }

  return (
    <>
    <div className="overflow-hidden bg-white sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">Add Expense</h3>    
      </div>    
        <hr />   
      <div className='grid grid-cols-4 px-4 py-5 sm:px-6 gap-16'>
        <div>
            <h1>Expense Amount</h1>
            <input value={info.amount} type="number" id="email" autoComplete='of' name="amount" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate}></input>            
        </div>       
        <div>
            <h1>Expense Category</h1>
            <input value={info.category} type="text" id="email" autoComplete='of' name="category" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate}></input>           
        </div>
        <div>
            <h1>Expense Date</h1>
            <input value={info.date} type="date" id="email" autoComplete='of' name="date" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate}></input>           
        </div>
      </div>
      <div className='px-4 py-5 sm:px-6'>
      <h1>Expense Description</h1>
      <textarea value={info.message} id="message" name="message" class="w-96 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={validate} ></textarea>
      </div>
      <div className='px-4'>
      <p className='text-red-500 mb-4'>{err}</p>
      </div>
      <div className='flex px-4 sm:px-6'>
      <button class={`text-white ${color} mb-10 border-0 py-2 px-6 focus:outline-none hover:${hover} rounded text-lg`} onClick={add}>{loading}</button>
      </div>     
      </div>
    </>
  )
}

export default AddExpense
