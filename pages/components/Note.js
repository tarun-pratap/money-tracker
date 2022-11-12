import React from 'react'

function Note(props) {
  return (
    <div className="px-4 sm:px-6 mt-4 p-2">
        <div className="bg-amber-100 p-1 px-4 sm:px-6 w-80 rounded-lg shadow-xl">           
            Amount:
            <input value={props.amount} type="number" autoComplete='of' name="amount" class="w-32 ml-4 rounded text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled></input> <br />            
            Category: 
            <input value={props.category} type="text" autoComplete='of' name="category" class="w-32 ml-2 rounded text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled></input> <br />  
            Date: 
            <input value={props.date} type="date" autoComplete='of' name="date" class="w-36 ml-10 mb-1 rounded text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled></input> <br /> 
            Description:
            <input value={props.message} type="text" autoComplete='of' name="text" class="w-auto mt-1 rounded text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled></input>
            <button className='bg-red-500 text-slate-100 mb-2 rounded mt-4 w-32 h-8' onClick={() => {props.del(props.id)}}>Delete Expense</button>
        </div>
    </div>
  )
}

export default Note
