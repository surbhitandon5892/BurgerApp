import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i)=> { 
				return <BurgerIngredient key={igKey + i} type={igKey}/>;
		});
	})
	.reduce((arr, el) =>{
		return arr.concat(el);
	}, []); // gives you array of keys of object and with spread operator you can create a array
		//[Array()] -> create a new aarray and Array(3) means array with 3 empty spaces not the length 3
		//_ means black and doesn't care about element name 
		//Here the reduce has 2 parameter and one is arr (prev value) and el is old value and adjust the reduced value
		//arr is updated root array and take el 
	if(transformedIngredients.length === 0){
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className = {classes.Burger}>
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	);
};

export default Burger;


// <BurgerIngredient type="cheese"/>
// <BurgerIngredient type="salad"/>