import React from 'react';
import ReactDOM from 'react-dom';

import EchartsComponent from './EchartsComponent.jsx';



ReactDOM.render(<EchartsComponent name="line_YHRZ" />, document.getElementById('line_YHRZ'))
ReactDOM.render(<EchartsComponent name="funnel_SBPM" />, document.getElementById('funnel_SBPM'))
ReactDOM.render(<EchartsComponent name="mix_JHL" />, document.getElementById('mix_JHL'))
ReactDOM.render(<EchartsComponent name="scatter_HotSpot" />, document.getElementById('scatter_HotSpot'))
ReactDOM.render(<EchartsComponent name="mix_NAS" />, document.getElementById('mix_NAS'))
ReactDOM.render(<EchartsComponent name="mix_DZZD" />, document.getElementById('mix_DZZD'))