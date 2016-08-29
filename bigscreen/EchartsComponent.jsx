import React from 'react';

import DynamicChartComponent from './ChartComponent/DynamicChartComponent.jsx';
import Line_YHRZ_ChartComponent from './ChartComponent/Line_YHRZ_ChartComponent.jsx';
import Funnel_SBPM_ChartComponent from './ChartComponent/Funnel_SBPM_ChartComponent.jsx';
import Mix_JHL_ChartComponent from './ChartComponent/Mix_JHL_ChartComponent.jsx';
import Scatter_HotSpot_ChartComponent from './ChartComponent/Scatter_HotSpot_ChartComponent.jsx';

const EchartsComponent = React.createClass({
    propTypes: {
    },
    render: function() {
        if (this.props.name == 'Dynamic_Chart') return (<DynamicChartComponent />);
        if (this.props.name == 'Line_YHRZ_Chart') return (<Line_YHRZ_ChartComponent />);
        if (this.props.name == 'Funnel_SBPM_Chart') return (<Funnel_SBPM_ChartComponent />);
        if (this.props.name == 'Mix_JHL_Chart') return (<Mix_JHL_ChartComponent />);
        if (this.props.name == 'Scatter_HotSpot_Chart') return (<Scatter_HotSpot_ChartComponent />);
        return (<DynamicChartComponent />);
    }
});

export default EchartsComponent;