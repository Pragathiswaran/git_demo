import React from 'react'
import './../../styles/form.css'

function Form({children, ...props}) {
  return (
   <>
    <div className='form-container'>
      <h2>Sign Up</h2>
      <form className='form' {...props}>
        {children}
      </form>
    </div>
   </>
  )
}

export default Form