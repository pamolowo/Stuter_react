import React from 'react'
import Lens from '../images/camera.png';
import Mic from '../images/microphone.png';
import Search from '../images/search.png';
import '../styles/search.css'
import MenuItem from './MenuItem';

export default function SearchBar() {
  return (
    <>
    <div style = {{ maxWidth: "50%", margin: " 5% auto"}}>

      <input type="text"  className='inputType'/>
      <img src={Search} alt="search" className='searchIcon' />
      <img src={Lens} alt="lens" className='lensIcon' />
      <img src={Mic} alt="mic" className='micIcon' />
     
    </div>
    <div style={{display:"flex", justifyContent:"center",gap:"4px", width:"50%" , margin:"auto"}}>
     <div style= {{border: "2px solid #ded9d9", padding: "3px"}}><MenuItem title={"Google Search"} /></div> 
     <div style= {{border: "2px solid #ded9d9", padding: "3px"}}><MenuItem title={"I'm Feeling Lucky"} /> </div> 
      
    </div>
    </>
  )
}
