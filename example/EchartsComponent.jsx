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
        if (this.props.name == 'dynamic_Chart') return (<DynamicChartComponent />);
        if (this.props.name == 'line_YHRZ') return (<Line_YHRZ_ChartComponent />);
        if (this.props.name == 'funnel_SBPM') return (<Funnel_SBPM_ChartComponent />);
        if (this.props.name == 'mix_JHL') return (<Mix_JHL_ChartComponent />);
        if (this.props.name == 'scatter_HotSpot') return (<Scatter_HotSpot_ChartComponent />);
        return (<DynamicChartComponent />);
    }
});

export default EchartsComponent;