import React from 'react'
import './App.css'
function Editablerow({editformdata,handleeditformchange,handlecancelclick}) {
  return (
    
    <tr>
    <td><input type={'text'} id='name' placeholder='enter name' required='required' value={editformdata.name} onChange={handleeditformchange} /></td>
    <td><input type={'text'} id='address' placeholder='enter address' required='required' value={editformdata.address}onChange={handleeditformchange} /></td>
   <td> <input type={'text'} id='phonenumber' placeholder='enter phonenumber' required='required' value={editformdata.phonenumber}onChange={handleeditformchange} /></td>
    <td><input type={'email'} id='email' placeholder='enter email' required='required' value={editformdata.email} onChange={handleeditformchange}/></td>
   
   <button type='submit' className='sav'>save</button> 
   <button  onClick={handlecancelclick} className='can'>cancel</button></tr>
    
  )
}

export default Editablerow