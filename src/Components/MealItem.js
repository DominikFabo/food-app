import React from "react";
import classes from './MealItem.module.css';

const MealItem = (props) => {


    return(
        <li className={classes.item}>
            {props.name}
        </li>
    );
};

export default MealItem;