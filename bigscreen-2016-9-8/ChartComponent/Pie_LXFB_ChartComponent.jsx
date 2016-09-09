import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

const Pie_LXFB_ChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
    currentIndex: -1,
    getInitialState: function() {
        return {option: this.getOption()};
    },
    showToolTip: function(echartObj) {
        let option = this.state.option;
        let currentIndex = -1;
        setInterval(function() {
            let dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            echartObj.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen;
            // 高亮当前图形
            echartObj.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            // 显示 tooltip
            echartObj.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
        }, 2000);
    },
    fetchNewDate: function() {
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    getOption: function() {
        const option = {
            color: [
                '#21c6a5', '#65c7f7', '#096dc5', '#4246ef'
            ],
            //  backgroundColor: '#2c343c',
            tooltip: {
                trigger: 'item',
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                },
                axisPointer: {
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    }
                },
                formatter: "{b} : {c}"
            },
            series: [{
                name: '类型分布',
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontFamily: 'sans-serif',
                            fontSize: 18
                        },
                    },
                },
                radius: '65%',
                center: ['50%', '60%'],
                data: [{
                    value: 335,
                    name: '胖ap'
                }, {
                    value: 310,
                    name: '光猫'
                }, {
                    value: 234,
                    name: '瘦AP'
                }, {
                    value: 135,
                    name: '融合终端'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        return option;
    },
    render: function() {
        return (
            <ReactEcharts ref='echarts_react' 
                onChartReady={this.showToolTip} 
                option={this.state.option} 
                style={{height: '100%', width: '100%'}} />
        ); 
    }
});

export default Pie_LXFB_ChartComponent;