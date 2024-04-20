/*11.Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.
*/


import React,{createContext,useState} from 'react';
const shoppingCartContext= createContext();

const ShoppingCartProvider = ({children}) => {
const [cart, setCart]=useState([]);
return (
    <shoppingCartContext.Provider value={[cart,setCart]}>
        {children}
    </shoppingCartContext.Provider>
)


}

export {ShoppingCartProvider,shoppingCartContext}
