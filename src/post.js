import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
function App() {
  const url="https://jsonplaceholder.typicode.com/posts"
  const [data,setdata]=useState({
    name:"",
    aga:"",
    id:"",
  })
 
  const handle=(e)=>{
    const newdata={...data}
    newdata[e.targetid]=e.target.value
    setdata(newdata)
    console.log(newdata);
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    Axios.post(url,{
      name:data.name,age:data.age,id:data.id
    }).then(res=>{
      console.log(res.data);
    })
    
  }

  return (
    <div><form onSubmit={handlesubmit}><input id='name' onClick={(e)=>handle(e)}/>
    <input id='age' onClick={(e)=>handle(e)}/>
    <input id='gender' onClick={(e)=>handle(e)}/>
    <button>add</button>
    </form>
    
    </div>
  )
}

export default App