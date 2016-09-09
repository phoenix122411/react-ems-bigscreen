import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

const Mix_JHL_ChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
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
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    getOption: function() {
        const option = {
            //  backgroundColor:'#333',
            color: [
                '#21c6a5', '#65c7f7'
            ],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false,
                    onZero: true,
                    lineStyle: {
                        color: '#aaa',
                        width: 1,
                        type: 'solid',
                        opacity: 1,
                    },
                },

                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    show:false
        //          formatter: '{value} ml'
                },
                axisLine: {
                    show: false,
                    onZero: true,
                    lineStyle: {
                        color: '#aaa',
                        width: 1,
                        type: 'solid',
                        opacity: 1,
                    },
                },

            }, {
                type: 'value',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
        //          formatter: '{value} °C'
        show:false
                }
            }],
            series: [{
                    name: '激活率',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },

                {
                    name: '激活量',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
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

export default Mix_JHL_ChartComponent;