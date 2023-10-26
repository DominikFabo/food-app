import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "../CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });
  return (
    <Modal onClose={props.disableCartHandler}>
      <ul className={classes.cartItems}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.close} onClick={props.disableCartHandler}>
          Close
        </button>
        {hasItems && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
