import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './context';

const Tiles
 = ({image_url,image_url_large}) => {
const navigate = new useNavigate();
const { setValue } = useContext(MyContext);



const handleClick=()=>{
  setValue(image_url_large);
  navigate('/fullsize')

}


  return (
    <div>
      <img src={image_url} className='w-full h-full object-cover hover:scale-105' onClick={handleClick}></img>
    </div>
  )
}

export default Tiles
