import React from 'react';
import ReactDOM from 'react-dom';

import EchartsComponent from './EchartsComponent.jsx';

ReactDOM.render(<EchartsComponent name="gauge_YBP" />, document.getElementById('gauge_YBP'));
if(typeof(chartNameList) != 'undefined') {
	for(var i=0; i<chartNameList.length; i++) {
		if(document.getElementById(chartNameList[i].target_name) != null) {
			ReactDOM.render(<EchartsComponent name={chartNameList[i].chart_path} />, document.getElementById(chartNameList[i].target_name));
		}
	}
}