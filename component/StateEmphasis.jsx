
import React, {Component} from 'react';
import './StateEmphasis.scss';

import EmphasisTimer from './EmphasisTimer.jsx';

class StateEmphasis extends Component {

	constructor() {
		super();
	}

	render() {

		let emphasisPanel = {
			width: 400,
			height: 300,
			backgroundColor: '#000',
			borderRadius: 5,
			margin: 'auto',
			marginTop: 40,
			paddingTop: 100
		};

		var emphasis = {
			fontFamily: 'serif',
			fontWight: 'bold',
			textAlign: 'center',
			padding: '5px 0',
		}

		var textStyle = {
				emphasisBig: {
					fontSize: 22,
					color: '#f90',
					...emphasis
				},
				emphasisSmall: {
					fontSize: 18,
					color:'purple',
					...emphasis
				}
		}

		return (
			<div style={emphasisPanel}>
				<EmphasisTimer />
				<div style={textStyle.emphasisBig}>这是一个计数器</div>
				<div style={textStyle.emphasisSmall}>样式这边用到了扩展运算符</div>
			</div>
		)
	}

}

export default StateEmphasis;