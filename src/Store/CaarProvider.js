import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemId = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemId];
    
    let updatedItem;
    let updatedItems;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemId] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemId = state.items.findIndex(
      (item) => item.id === action.item
    );
    const existingItem = state.items[existingItemId];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.item);
    } else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingItemId] = updatedItem;
    }

    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", item: id });
  };

  const cartContextHelper = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
