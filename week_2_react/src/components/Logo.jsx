import React from 'react'
import GoogleLogo from '../images/google.png';

export default function Logo() {
  return (
    <>
      <div  style = {{ maxWidth: "50%", margin: " 5% auto" , justifyItems: "center" , alignContent: "center"}}>
      <img src= {GoogleLogo} alt="logo"  />
      </div>
    </>
  )
}
