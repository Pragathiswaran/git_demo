import React from 'react'

function Input({type = 'text', value, onChange, placeholder, className}) {
  return (
    <input type={type} value={value} placeholder={placeholder} className={className} />
  )
}

export default Input
