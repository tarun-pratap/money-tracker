import React from 'react'

function Note2(props) {

  return (
    <>
       <div className="px-4 sm:px-6 mt-4 p-2">
        <div className="bg-amber-100 p-1 px-4 sm:px-6 w-80 rounded-lg shadow-xl">
            <div style={{marginTop: "1rem", marginBottom: "0rem"}}>Saving days: {props.day}</div>
            Total Savings: <span className='ml-1'>{props.total}</span> <br />            
            Date: <span className='ml-1'>{props.date}</span> <br />            
            <button className='bg-red-500 text-slate-100 mb-2 rounded mt-4 w-32 h-8' onClick={() => {props.del(props.id)}}>Delete Expense</button>
        </div>
    </div>
    </>
  )
}

export default Note2
