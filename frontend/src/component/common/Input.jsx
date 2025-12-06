import React from 'react'
import "./../../styles/input.css"

function Input({type = 'text', value, onChange, placeholder, className}) {
  return (
    <input type={type} value={value} placeholder={placeholder} className={"input"} />
  )
}

export default Input
