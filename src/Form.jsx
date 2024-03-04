import React from 'react'
import Button from './Button'

function Form({ byn_name, set_byn_name }) {
  return (

    <form className='form' action="" onSubmit={a => a.preventDefault()}>
      <Button  buttonText="users" byn_name={byn_name} set_byn_name={set_byn_name}  />
      <Button  buttonText="posts" byn_name={byn_name} set_byn_name={set_byn_name}  />
      <Button  buttonText="comments" byn_name={byn_name} set_byn_name={set_byn_name} />



    </form>
  )
}

export default Form