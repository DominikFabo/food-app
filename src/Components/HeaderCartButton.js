import React, {useContext}from "react";
import CartIcon from '../UI/CartIcon';
import CartContext from "../Store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartctx = useContext(CartContext);
    const numOfCartItmes = cartctx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.enableCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your cart
            </span>
            <span className={classes.counter}>
                {numOfCartItmes}
            </span>
        </button>
    );
};

export default HeaderCartButton;