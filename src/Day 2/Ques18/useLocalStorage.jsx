/*18.Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.
*/
    import React, { useState } from 'react'

    
    const useLocalStorage = (keyy,defaultvalue) => {
        const[state,setState]=useState('');

        const setting=(value)=>{
          localStorage.setItem('key',value)
          setState(value)
        }

       const removing=()=>{
        localStorage.removeItem('keyy')
       }
    
          return {state,setting,removing}
    }
    
    export default useLocalStorage
