import React, { useState , useEffect } from 'react'

export default function Prouducts() {
    
    let  [prouducts ,setProuducts] = useState([]);

    const getProuducts =async()=>{
        let response =await fetch("https://fakestoreapi.com/products");
        let data =await response.json();
        setProuducts(data);
    }
    useEffect(()=>{
        getProuducts();
    },[]);
  
  return (
    <div className='row container m-auto py-5'>
        {
        prouducts.map((ele)=>{
            return <div className='col-md-4 border text-center p-5 ' key={ele.id}>
                <h2 className='fs-4'>{ele.title}</h2>
                <img src={ele.image} alt="prouduct's image" className='w-50' />
                {console.log(ele)}


            </div>
        })
    }
 

    </div>
    
  )

  }