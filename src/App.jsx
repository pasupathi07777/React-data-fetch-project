import React from 'react'

import { useState,useEffect } from 'react';
import './App.css'
import List_items from './List_items';
import Form from './Form';
import Table from './table/Table';

function App() {
    

    // let button_name={
    //     name_1:"Users",
    //     name_2:"Posts",
    //     name_3:"Comments"
    // }
    
    let LINK='https://jsonplaceholder.typicode.com/'

let [byn_name,set_btn_name]=useState("users")
let [data,setdata]=useState([])
console.log(byn_name)


    useEffect(()=>{
        let fetch_data=async ()=>{
            let modifi_link=`${LINK}${byn_name}`
            let responce=await fetch(modifi_link)
            let data=await responce.json()
          
            setdata(data)
            
        }
        fetch_data()
    },[byn_name])
    return (
        <div className='App'>
            

            <Form byn_name={byn_name} set_byn_name={set_btn_name} />
            {/* <List_items data={data}/> */}
            <Table  data={data}/>
        </div>
    )
}

export default App