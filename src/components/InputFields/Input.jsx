import React from 'react'
import "../Edit/Edit.css"; 
import '../Post/Post.css';

export default function Input(props) { 
    const {data, setData, label, inputType, classStyle} = props; 

  return (
    <>
    <label htmlFor="">
        {label}
    </label>  
    {inputType === 'textarea' ? (
        <textarea type="text" className={classStyle} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea>
    ) : (
        <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
    )}
    
    </>
  )
}
