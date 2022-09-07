import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios'
function App() {
  const [product,setproduct]=useState([]);
  const [search,setsearch]=useState();
  const getproductdata=async ()=>{
    try {
      const data=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setproduct(data.data)
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    getproductdata()
  },[])
  return (
    <div>
    <input type={'text'} placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
    {
      product.filter((item) => {
        if (search==="") {
          return (item)
        }else if(item.name.toLowerCase().includes(search.toLowerCase())){
          return (item)
        }
      })
      .map((item)=>{
        return(
          <p>{item.name}</p>
        )
      })
    }
    </div>
  )
}

export default App;