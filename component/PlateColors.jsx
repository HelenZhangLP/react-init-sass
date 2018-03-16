import React, { Component } from 'react';
import ColorsCard from './ColorsCard.jsx';

const ColorsNum = 60; 

class PlateColors extends Component {

		constructor() {
			super();
			this.state = {
				colorArr: []
			}
		}

		componentWillMount() {
			this.setColors();
			console.log(11111);
		}

		setColors() {
			let colorArr = [],
					index,
					colorInitArr = '0123456789ABCDEF'.split(''),
					colorStr = '#';

			for(let i=0; i<ColorsNum; i++){
				for (let i = 0; i < 6; i++) {
					index = Math.floor(Math.random()*colorInitArr.length);
					colorStr += colorInitArr[index];
				}

				colorArr.push(colorStr);
				colorStr = '#';
			}

			console.log(colorArr);

			this.setState({
				colorArr: colorArr
			})
		}

    render() {
      let plateSty = {
				margin: '10px auto',
				width: 800,
				height: 300,
				backgroundColor: '#fff',
				webkitFilter: "drop-shadow(0px 0px 5px #333)",
				Filter: "drop-shadow(0px 0px 5px #333)"
			},
			ccArr = this.state.colorArr,
			colorArr = []

			colorArr = ccArr.map((item)=>{
				return <ColorsCard colorHash = {item} />
			})

			return (
				<div style={plateSty}>
					{colorArr}
				</div>
			)
    }
}

export default PlateColors;