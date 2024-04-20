/*5.Construct a select dropdown menu with multiple options.
 Control the selected option using state. When an option is selected, display a message showing the selected value.*/

 import React from "react";
 import { useState } from "react";
 
 const DropdownMenu = () => {
   const [selected, setSelected] = useState("");
 
   return (
     <>
       <select name="cars" id="cars" onChange={(e)=>setSelected(e.target.value)}>
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
       </select>
       <h3>{selected}</h3>
     </>
   );
 };
 
 export default DropdownMenu;
 