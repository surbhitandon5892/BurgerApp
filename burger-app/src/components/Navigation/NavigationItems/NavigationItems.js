import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default NavigationItems;