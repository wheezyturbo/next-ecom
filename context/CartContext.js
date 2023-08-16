// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// const initialState = {
//   items: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         items: state.items.filter((item) => item.name !== action.payload.name),
//       };
//     case 'CLEAR_CART':
//       return {
//         ...state,
//         items: [],
//       };
//     default:
//       return state;
//   }
// };

// // CartProvider component
// export const CartProvider = ({ children }) => {
//   const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ cartState, cartDispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import { createContext } from "react";

export const CartContext = createContext()
