import React, { Component } from 'react';
import './ColorsCard.scss';

class ColorsCard extends Component {

	render() {
		return (
			<div className="cardSty" style={{backgroundColor:this.props.colorHash}}>
				{this.props.colorHash}
			</div>
		)
	}
}

export default ColorsCard;