require('./bigscreen.css');

import React from 'react';
import ReactDOM from 'react-dom';

import EchartsComponent from './EchartsComponent.jsx';



ReactDOM.render(<EchartsComponent name="Dynamic_Chart" />, document.getElementById('Dynamic_Chart'))
ReactDOM.render(<EchartsComponent name="Line_YHRZ_Chart" />, document.getElementById('Line_YHRZ_Chart'))
ReactDOM.render(<EchartsComponent name="Funnel_SBPM_Chart" />, document.getElementById('Funnel_SBPM_Chart'))
ReactDOM.render(<EchartsComponent name="Mix_JHL_Chart" />, document.getElementById('Mix_JHL_Chart'))
ReactDOM.render(<EchartsComponent name="Scatter_HotSpot_Chart" />, document.getElementById('Scatter_HotSpot_Chart'))