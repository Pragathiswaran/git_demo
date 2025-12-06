import React from 'react'
import "./../../styles/button.css"

function Button({label, onClick, type = 'button', className}) {
  return (
    <button onClick={onClick} className={"btn l"} type={type}>{label}</button>
  )
}

export default Button 
