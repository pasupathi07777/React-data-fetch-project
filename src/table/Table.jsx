import React from 'react'
import Row from './Row'

const Table = ({ data}) => {
  return (
   <table>
    <tbody>
        <tr>
            {data.map(datas=>(
              <Row datas={datas}/>
              // console.log(datas)
             
            
           ))}
        </tr>
    </tbody>
   </table>
  )
}

export default Table