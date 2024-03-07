import React from 'react'
import Row from './Row'

const Table = ({ data}) => {
  return (
   <table>
    <tbody>
    {data.map(datas=>(
              <Row key={datas.id} datas={datas}/>
             
             
            
           ))}
    </tbody>
   </table>
  )
}

export default Table