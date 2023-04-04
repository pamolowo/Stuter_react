import React from 'react'
const link = "https://www.google.com/"

const Header = () => {
  return (
    <div>
        <header>
           <h1>Welcome to my website!</h1>
         <nav>
            <ul>
            <li><a href={link}>Home</a></li>
            <li><a href={link}>About</a></li>
            <li><a href={link}>Services</a></li>
            <li><a href={link}>Contact</a></li>
            </ul>
         </nav>
        </header>
    </div>
  )
}

export default Header