import React from "react";
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = (props) => {


    return(
        <li className={classes.item}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.desc}>{props.desc}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <MealItemForm id={props.id}/>
        </li>
    );
};

export default MealItem;