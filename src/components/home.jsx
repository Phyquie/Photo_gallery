import React from 'react'

import Header from './header';
import {useEffect, useState} from 'react';
import Tiles from './tiles';
import axios from 'axios';


const Home = () => {
    const[images, setImages] = useState([]);
    const[search, setSearch] = useState('random');
    const[pages, setPages] = useState(1);
    const [loading, setLoading] = useState(false);
    
    
      const AccessKey = process.env.REACT_APP_API_KEY;
    
    const getImages = async(text)=>{
      try{
        setLoading(true);
        const res = await axios.get(`https://api.unsplash.com/search/photos?page=${pages}&query=${text}&per_page=28&client_id=${AccessKey}`)
        const newImages = res.data.results
        setImages(previmages=>[...previmages,...newImages])
        setLoading(false);
      }
      catch(err){
        console.log(err)
      }
    }
    const getImagesSearch = async(text)=>{
        try{
        
          const res = await axios.get(`https://api.unsplash.com/search/photos?page=${pages}&query=${text}&per_page=28&client_id=${AccessKey}`)
          const newImages = res.data.results
          setImages(newImages)
        
        }
        catch(err){
          console.log(err)
        }
      }
      
    
    useEffect(()=>{
      getImages(search);
    
    },[pages])
    
    useEffect(()=>{
        getImagesSearch(search);
      
      },[search]
    )
    useEffect(() => {
        const handleScroll = () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000&& !loading) {
            setPages((prevPage) => prevPage + 1);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [loading]);
    
    
    
    const handlesearch =(text)=>{
      setSearch(text);
      setPages(1);
    
    }
  return (
    <div className="App">
    <Header handlesearch={handlesearch} />
    <div className='flex flex-row flex-wrap p-2 m-2 justify-center' >
    {images.map((image)=>{
      return(
        <Tiles image_url={image.urls.thumb} image_url_large={image.urls.full} />
      )})
    }
    
    </div>
    
  </div>
  )
}

export default Home