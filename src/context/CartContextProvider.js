import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  totalItems: 0,
  totalPrice: 0,
  checkOut: false,
};

const sum = (state) => {
  const totalItems = state.selectedItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = state.selectedItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return {
    totalItems,
    totalPrice,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (!state.selectedItems.find((el) => el.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        checkOut: false,
        ...sum(state),
      };
    case "increase":
      const indexI = state.selectedItems.findIndex(
        (el) => el.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        checkOut: false,
        ...sum(state),
      };
    case "decrease":
      const indexD = state.selectedItems.findIndex(
        (el) => el.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        checkOut: false,
        ...sum(state),
      };
    case "remove":
      const i = state.selectedItems.findIndex(
        (el) => el.id === action.payload.id
      );
      state.selectedItems.splice(i, 1);
      return {
        ...state,
        checkOut: false,
        ...sum(state),
      };
    case "checkOut":
      return {
        selectedItems: [],
        totalItems: 0,
        totalPrice: 0,
        checkOut: true,
      };
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
