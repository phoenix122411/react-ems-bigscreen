import React from 'react';
import ReactDOM from 'react-dom';

import EchartsComponent from './EchartsComponent.jsx';

ReactDOM.render(<EchartsComponent name="gauge_YBP" />, document.getElementById('gauge_YBP'));
for(var i=0; i<chartNameList.length; i++) {
	ReactDOM.render(<EchartsComponent name={chartNameList[i][0]} />, document.getElementById(chartNameList[i][1]));
}