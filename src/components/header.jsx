import React, { useState } from 'react'

const Header = ({handlesearch}) => {
   const[searchChild, setsearchChild]=useState('')

   const handleChange=(e)=>{
    setsearchChild(e.target.value);
    console.log(searchChild)
   }

   const handleKeyPress=(e)=>{
    if((e.key)==='Enter'){
      handlesearch(searchChild)
      setsearchChild('')

    }
   }



    return (
      <div className='flex flex-col xl:flex-row bg-pink-300 rounded-s-none justify-between p-5'>
        <div className='font-custom text-center xl:text-start text-pink-900 text-3xl sm:text-4xl lg:text-5xl'>
          Snap-Shot
        </div>
        <div className='w-full mt-3 xl:w-1/3 xl:mt-0'>
          <input 
            type="text" 
            placeholder='Search' 
            className='rounded-full ring-pink-500 h-10 w-full hover:ring-pink-900 text-center' onChange={handleChange}
            onKeyDown={handleKeyPress}
            value={searchChild}
          />
        </div>
      </div>
    )
  }
  

export default Header