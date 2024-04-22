import React,{useState} from 'react'
import Button from './Button'

function Application1() {
    const [count,setCount]=useState(0)
    function onClickHandler()
    {
        setCount(count+1)
    }
  return (
    <div>
       <Button color={"red"} onClickHandler={onClickHandler} count={count}/>
    </div>
  )
}

export default Application1
