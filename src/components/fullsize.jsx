import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context'
const Fullsize = () => {

    const {value} = useContext(MyContext)
  return (
    <div><img src={value}/></div>
  )
}

export default Fullsize