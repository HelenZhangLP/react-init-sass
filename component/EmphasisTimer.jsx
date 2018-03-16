
import React,{Component} from 'react';
import './EmphasisTimer.scss';

class EmphasisTimer extends Component {

	constructor() {
		super();

		//React 在 ES6 中，去掉了 getInitialState hook 函数，规定 state 在 Construtor 中实现
		this.state = {
			timers: 0,
			cInterval: null
		}
	}

	componentDidMount() {
		this.setTimers();
	}

	shouldComponentUpdate() {
		if(this.state.timers > 1000) {
			clearInterval(this.state.cInterval);
			return false;
		} else {
			return true;
		}
	}

	setTimers(){
		let timers = this.state.timers;
		this.state.cInterval = setInterval(()=>{
			timers += 100;
			this.setState({
				timers: timers
			})
		},1000)
	}

	componentWillUnmount() {
		console.log('Em componentWillUnmount');
	}

	render() {
		let timerStyle = {
			fontFamily: 'sans-serif',
			textAlign: 'center',
			color: '#fff9aa',
			textAlign: 'center'
		}

		return (
			<div style={timerStyle}>
				<h2>{this.state.timers}</h2>
			</div>
		)
	}
}

export default EmphasisTimer;