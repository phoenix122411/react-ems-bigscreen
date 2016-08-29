import React from 'react';
import ReactDOM from 'react-dom';

import EchartsComponent from './EchartsComponent.jsx';



ReactDOM.render(<EchartsComponent name="dynamic_Chart" />, document.getElementById('dynamic_Chart'))
ReactDOM.render(<EchartsComponent name="line_YHRZ" />, document.getElementById('line_YHRZ'))
ReactDOM.render(<EchartsComponent name="funnel_SBPM" />, document.getElementById('funnel_SBPM'))
ReactDOM.render(<EchartsComponent name="mix_JHL" />, document.getElementById('mix_JHL'))
ReactDOM.render(<EchartsComponent name="scatter_HotSpot" />, document.getElementById('scatter_HotSpot'))