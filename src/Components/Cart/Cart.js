import React from "react";
import classes from './Cart.module.css';
import Modal from "../../UI/Modal";


const Cart = (props) =>{



    return (
        <Modal onClose={props.disableCartHandler}>
            <ul className={classes.cartItems}>
                <li>Name of product</li>
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35.55</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.close} onClick={props.disableCartHandler}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;