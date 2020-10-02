import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer.js';
class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer : false});
	}
	sideDrawerToggleHandler = () => {

		this.setState((prevState) => {
			return {showSideDrawer : !prevState.showSideDrawer};
		});
	}
	render(){
		return (
			<Aux>
				// <div>Toolbar, sideDrawer, Backdrop</div>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
				<main className = {classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}


export default Layout;