//Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers.
// Demonstrate how to use this component in a sample application.

import React from 'react'

function Button({onClickHandler,color,count}) {
  return (
    <div>
      <button onClick={onClickHandler} style={{color:color}}>{count}</button>
    </div>
  )
}

export default Button