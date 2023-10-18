import React from "react";
import classes from './Header.module.css';
import mealImg from '../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {


    return(
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="Table with food"></img>
            </div>
        </>
    );
};

export default Header;