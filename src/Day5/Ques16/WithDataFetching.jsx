//16.Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. 
//Use this HOC to retrieve and display data in a component.

import React,{useEffect,useState} from 'react'

const WithDataFetching = (BaseComponent) => {

  return function EnhancedComponent(props) {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json()).then((result) => setData(result)).catch((err) => {
        console.log(err)
        })
        
       },[])
       
   return (
    
     <BaseComponent data={data} />
   );
 };
}

export default WithDataFetching
