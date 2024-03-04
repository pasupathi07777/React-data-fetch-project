import React from 'react'

const Button = ({buttonText,byn_name,set_byn_name}) => {
  return (
    <button className ={buttonText===byn_name?"select_btn":null} onClick={()=>set_byn_name(buttonText)} >{buttonText}</button>
  )
}

export default Button