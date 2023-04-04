import React from 'react'
import Pam from '../images/PAMMEEEp.jpg'


export default function Avatar() {
  return (
    <div>
      <img src={Pam} alt="pam" style={{ height: "35px" , borderRadius: "50%", width:"35px", border: 'solid 5px pink'}}  />
    </div>
  )
}
