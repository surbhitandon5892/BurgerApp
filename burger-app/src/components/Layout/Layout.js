import React from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer.js';
const Layout = (props) => (
	<Aux>
		// <div>Toolbar, sideDrawer, Backdrop</div>
		<Toolbar />
		<Sidedrawer />
		<main className = {classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default Layout;