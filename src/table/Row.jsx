import React from 'react'
import Colm from './Colm'

const Row = ({datas}) => {
  return (
    <tr>
            {/* {Object.entries(datas).map(([key,value])=>{
                return(
                    <Colm key={key} celldata={JSON.stringify( value)}/>
                )
            })} */}
            {Object.entries(datas).map(([key,val])=>{
                // console.log(valw)
                return(
                    <Colm key={key} val={JSON.stringify(val)} />
                )
            })}

    </tr>
  )
}

export default Row