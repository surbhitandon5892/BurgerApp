import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

//Name all global constants in capital letters
const INGREDIENT_PRICES = {
	salad: 0.5, 
	bacon: 0.7,
	cheese: 0.6,
	meat: 0.9
}

class BurgerBuilder extends Component{
	// constructor(props) {
	// 	super(props);
	// 	this.state = {...}
	// }
	state = {
		ingredients: {
			salad: 0, 
			bacon: 0,
			cheese: 0,
			meat: 0
		}, 
		totalPrice : 4
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const updatedPrice = priceAddition + oldPrice;
		this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0){
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
	
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		// salad : true
		// meat : false
		return (
			<Aux>
				<Burger ingredients = {this.state.ingredients}/>
				<BuildControls ingredientAdded={this.addIngredientHandler} 
				ingredientRemoved={this.removeIngredientHandler} 
				disabled={disabledInfo}
				price={this.state.totalPrice}/>
			</Aux>
		);
	}
}

export default BurgerBuilder;