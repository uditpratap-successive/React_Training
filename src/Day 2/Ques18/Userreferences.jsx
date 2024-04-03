import React,{useState} from 'react'
import useLocalStorage from './useLocalStorage'

const Storage = () => {
    const {state:valuetoshow, setting,removing} = useLocalStorage()
    const [data,setData] =useState("")
   return (
        <div>
           
            <h1>{valuetoshow}</h1>
            <label htmlFor="value">Change Value</label>
            <input type="text" onChange={(e)=> setData(e.target.value)} />
            
            <button onClick={() => setting(data)}>Set Value</button>
            <button onClick={() => removing(data)}>Delete Value</button>
            
            
        </div>
    )
  
}

export default Storage
