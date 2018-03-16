
import React,{Component} from 'react';
import './Counter.scss';

class Counter extends Component {
	
	constructor() {
		super();
	}

	componentWillReceiveProps(nextProps) {
		console.log('son componentWillReceiveProps',nextProps);
	}

	// shouldComponentUpdate(props, state) {
	// 	console.log("son shouldComponentUpdate::")
	// }

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log("son componentWillUpdate::");
	// }

	// componentDidUpdate() {
	// 	console.log("son componentDidUpdate::");
	// }

	render() {
		return (
			<div style={{
				paddingTop: 80,
				fontSize: 48,
			}}>{this.props.counts}</div>
		)
	}
}

export default Counter;