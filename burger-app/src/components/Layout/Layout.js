import React from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.module.css';

const Layout = (props) => (
	<Aux>
		<div>Toolbar, sideDrawer, Backdrop</div>
		<main className = {classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default Layout;