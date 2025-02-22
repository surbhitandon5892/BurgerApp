import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';
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
		totalPrice : 4,
		purchasable : false,
		purchasing : false
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			}).reduce((sum, el)=>{
				return sum + el;
			}, 0);
			this.setState({purchasable : sum > 0});
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
		this.updatePurchaseState(updatedIngredients);
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
		this.updatePurchaseState(updatedIngredients);
	
	}

	purchaseHandler = () => {
		this.setState({purchasing : true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing : false});
	}

	purchaseContinueHandler = () => {
		alert('You Continue!')
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
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
				<OrderSummary 
				ingredients = {this.state.ingredients}
				purchaseCancelled={this.purchaseCancelHandler}
				purchaseContinued={this.purchaseContinueHandler}
				price={this.state.totalPrice}/>
				</Modal>
				<Burger ingredients = {this.state.ingredients}/>
				<BuildControls ingredientAdded={this.addIngredientHandler} 
				ingredientRemoved={this.removeIngredientHandler} 
				disabled={disabledInfo}
				price={this.state.totalPrice}
				ordered={this.purchaseHandler}
				purchasable = {this.state.purchasable}/>
			</Aux>
		);
	}
}

export default BurgerBuilder;