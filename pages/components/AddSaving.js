import React, { useState } from 'react'

function AddSaving(props) {

  const [loading, setLoading] = useState("Add");
  const [color, setColor] = useState("bg-indigo-500");
  const [hover, sethover] = useState("bg-indigo-600");
  const [info, setInfo] = useState({
      date: ""
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

   function addSaving(){        
    if(info.date === ""){
        seterr("** Please fill all details !!");
        return false;
    }
    else {
    seterr("");               
    setLoading("Wait while adding...")
    setTimeout(() => {       
      props.add(info);  
      setLoading("Added");     
      setColor("bg-emerald-500");   
      sethover("bg-emerald-600");        
      setInfo({      
        date: ""
      })      
    }, 1000); 
    setTimeout(() => {
        setLoading("Save More"); 
        setColor("bg-indigo-500");   
        sethover("bg-indigo-600");   
        alert("Congrats on new entry, you are heading towards financial freedom") 
    }, 2500);
    }
}

  return (
    <>

<div className="overflow-hidden bg-white sm:rounded-lg">     
      <div className='grid grid-cols-4 px-4 py-5 sm:px-6 gap-16'>
        <div>
            <h1>Saved Amount</h1>
            <input value={"10"} type="number" autoComplete='of' name="amount" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled onChange={validate}></input>            
        </div>      
        <div>
            <h1>Date</h1>
            <input value={info.date} type="date" autoComplete='of' name="date" class="w-64 mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate}></input>           
        </div>
      </div>     
      <div className='px-4'>
      <p className='text-red-500 mb-4'>{err}</p>
      </div>
      <div className='flex px-4 sm:px-6 flex-row'>
      <button class={`text-white ${color} border-0 py-2 px-6 focus:outline-none hover:${hover} rounded text-lg`} onClick={addSaving}>{loading}</button>        
      </div>   
      </div>         
    </>
  )
}

export default AddSaving
