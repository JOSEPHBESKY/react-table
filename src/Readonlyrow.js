import React from 'react'
import './App.css'
function Readonlyrow({contect,handleeditclick,handledaleteclick}) {
  return (
    <tr><td>{contect.name}</td>
    <td>{contect.address}</td>
    <td>{contect.phonenumber}</td>
    <td>{contect.email}</td>
    <td><button type='submit' className='edi' onClick={(e)=>{handleeditclick(e,contect)}}>edit</button>
    <button onClick={handledaleteclick} className='del'>delete</button></td></tr>
  )
}

export default Readonlyrow