// import { useContext, useState } from "react";
// import ContextProvider from "./ContextProvider";
// import { ShoppingContext } from "./ContextProvider";

// const Cart = () => {
//     const{item,setItem}=useContext(ShoppingContext)
//     const[price,SetPrice]=useState(0);

//   const pizza=()=>{
//     setItem(...item,'pizza')
//     SetPrice(...price,50)

//   }
//   const samosa=()=>{
//     setItem(...item,'samosa')
//     SetPrice(...price,500)

//   }
// const banana=()=>[
//     setItem(...item,'banana'),
//       SetPrice(...price,100)

// ];

//   return (

//     <div style={{display:'flex',flexDirection:'row'}}>

//     <button onClick={pizza} >Add Pizza</button>
//     <button onClick={samosa}>Add Samosa</button>
//     <button onClick={banana}>Add Banana</button>
//     <button>Add Bread</button>
//     <button onClick={}>Remove</button>

//     </div>
//   )
// }

// export default Cart

import React, { useContext, useState } from "react";
import { shoppingCartContext } from "./ContextProvider";

const Cart = () => {
  const [cart, setCart] = useContext(shoppingCartContext);
  const [total, setTotal] = useState(0);

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    setTotal(newCart.reduce((acc, item) => acc - item.price, 0));
  };

  const handleAdd = (item) => {
    const newCart = [...cart, { id: Date.now().toString(36), ...item }];
    setCart(newCart);
    setTotal(newCart.reduce((total, item) => total + item.price, 0));
  };
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} -{" "}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button
        onClick={() => {
          setCart([]);
          setTotal(0);
        }}
      >
        Clear Cart
      </button>

      <button onClick={() => handleAdd({ name: "Pizza", price: 10 })}>
        Add Pizza
      </button>
      <button onClick={() => handleAdd({ name: "Burger", price: 20 })}>
        Add Burger
      </button>
      <button onClick={() => handleAdd({ name: "Chicken", price: 50 })}>
        Add Chicken
      </button>
      <button onClick={() => handleAdd({ name: "Fries", price: 44 })}>
        Add Fries
      </button>
      <button onClick={() => handleAdd({ name: "Soda", price: 56 })}>
        Add Soda
      </button>
      <button onClick={() => handleAdd({ name: "Water", price: 101 })}>
        Add Water
      </button>
      <button onClick={() => handleAdd({ name: "Milk", price: 55 })}>
        Add Milk
      </button>
      <button onClick={() => handleAdd({ name: "Cheese", price: 34 })}>
        Add Cheese
      </button>
      <button onClick={() => handleAdd({ name: "Bread", price: 140 })}>
        Add Bread
      </button>
    </div>
  );
};
export default Cart;
