
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter.jsx';
import './LifeCycle.scss';


class LifeCycle extends Component {
	constructor() {
		super();

		this.state = {
			counts: 0
		}
	}

	componentWillMount() {
		console.log("ComponentWillMount::");
	}

	componentDidMount() {
		console.log("ComponentDidMount::");
	}

	shouldComponentUpdate(props, state) {
		console.log("shouldComponentUpdate::")
		if(this.state.counts < 5) {
			return true;
		} else {
			document.querySelector('#btn').style.display = 'none';
			return false;
		}
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("componentWillUpdate::");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate::");
	}

	componentWillUnmount(){
		console.log("componentWillUnmount::");
	}

	increase() {
		this.setState({
			counts: this.state.counts + 1
		})
	}

	render() {
		return (
			<div className = "plateCounter">
				<Counter counts = { this.state.counts } />
				<button onClick = {this.increase.bind(this)} id="btn">+</button>
			</div>
		)
	}


}

export default LifeCycle;