import React from "react";
import classes from './Header.module.css';
import image from '../../assets/meals.jpg.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
    <header className={classes.header}>
    <h1>BestMeals</h1>
    <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
    <img src={image} alt="Meals"/>
    </div>
    </React.Fragment>
};

export default Header;