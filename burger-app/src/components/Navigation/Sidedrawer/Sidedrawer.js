import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Aux from '../../../hoc/Aux.js';
const Sidedrawer = (props) => {
	let attachedClasses = [classes.Sidedrawer, classes.Close];
	if(props.open){
		attachedClasses = [classes.Sidedrawer, classes.Open];
	}
	
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	);
};

export default Sidedrawer;