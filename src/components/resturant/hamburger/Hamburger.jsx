import React, { useState , useEffect } from 'react'


function Hamburger() {
    let  [hamburgers ,setHamburger] = useState([]);

    const getHamburger =async()=>{
        let response =await fetch("https://forkify-api.herokuapp.com/api/search?q=hamburger");
        let data =await response.json()
        setHamburger(data.recipes);
    }
    useEffect(()=>{
        getHamburger();
    },[]);
  

  return (
    <div className='row container m-auto py-5'>
        {
        hamburgers.map((ele)=>{
            return <div className='col-md-4 border text-center p-5 ' key={ele.id}>
                <h2 className='fs-4'>{ele.title}</h2>
                <img src={ele.image_url} alt="prouduct's image" className='w-50' />
                {console.log(ele)}


            </div>
        })
    }
    </div>
  )
}

export default Hamburger 