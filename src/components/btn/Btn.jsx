import React from 'react'

const Btn = ({btn_name,set_btn_nam}) => {
  function btn(){

  }
    
  return (
    <form action="" className='form' onSubmit={a=>a.preventDefault()}>
    <button  className={btn_name===btn_name?"select_btn":null} type="button" onClick={()=>set_btn_nam(btn_name)}>{btn_name} </button>
        
    </form>    
  )
}

export default Btn