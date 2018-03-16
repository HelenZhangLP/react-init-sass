import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PlateColors from '../PlateColors.jsx';
import StateEmphasis from '../StateEmphasis.jsx';
import LifeCycle from '../LifeCycle.jsx';
import './index.scss';

ReactDOM.render(
	<div className="page">
		<PlateColors />
		<StateEmphasis />
		<LifeCycle />
	</div>,
	document.querySelector('#container')
)