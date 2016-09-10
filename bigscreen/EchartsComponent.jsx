import React from 'react';

import Default_Component from './ChartComponent/Default_Component.jsx';
import Line_YHRZ_ChartComponent from './ChartComponent/Line_YHRZ_ChartComponent.jsx';
import Funnel_SBPM_ChartComponent from './ChartComponent/Funnel_SBPM_ChartComponent.jsx';
import Mix_JHL_ChartComponent from './ChartComponent/Mix_JHL_ChartComponent.jsx';
import Scatter_HotSpot_ChartComponent from './ChartComponent/Scatter_HotSpot_ChartComponent.jsx';
import Mix_NAS_ChartComponent from './ChartComponent/Mix_NAS_ChartComponent.jsx';
import Mix_DZZD_ChartComponent from './ChartComponent/Mix_DZZD_ChartComponent.jsx';
import Pie_LXFB_ChartComponent from './ChartComponent/Pie_LXFB_ChartComponent.jsx';
import Gauge_YBP_ChartComponent from './ChartComponent/Gauge_YBP_ChartComponent.jsx';

const EchartsComponent = React.createClass({
    propTypes: {
    },
    render: function() {
        if (this.props.name == 'line_YHRZ') return (<Line_YHRZ_ChartComponent />);
        if (this.props.name == 'funnel_SBPM') return (<Funnel_SBPM_ChartComponent />);
        if (this.props.name == 'mix_JHL') return (<Mix_JHL_ChartComponent />);
        if (this.props.name == 'scatter_HotSpot') return (<Scatter_HotSpot_ChartComponent />);
        if (this.props.name == 'mix_NAS') return (<Mix_NAS_ChartComponent />);
        if (this.props.name == 'mix_DZZD') return (<Mix_DZZD_ChartComponent />);
        if (this.props.name == 'pie_LXFB') return (<Pie_LXFB_ChartComponent />);
        if (this.props.name == 'gauge_YBP') return (<Gauge_YBP_ChartComponent />);
        return <Default_Component />;
    }
});

export default EchartsComponent;