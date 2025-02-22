import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js';
const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return(
				<li key={igKey}>
					<span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
				</li>
			);
		});

	return (
		<Aux>
			<h3> Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<h3> Total Price : {props.price.toFixed(2)} </h3>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
		</Aux>
	);
};

export default OrderSummary;

//span turns the first letter into capital letter
//<li> Salad: 1</li>