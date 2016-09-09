import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

const Gauge_YBP_ChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
    currentIndex: -1,
    getInitialState: function() {
        return {option: this.getOption()};
    },
    showToolTip: function(echartObj) {
        let option = this.state.option;
        setInterval(function() {
            option.series[0].data[0].value = (Math.random() * 10 + 90).toFixed(0);
            echartObj.setOption(option);
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
            series: [{
                    name: '速度',
                    type: 'gauge',
                    min: 0,
                    max: 100,
                    splitNumber: 5,
                    radius: '40%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.1, '#f64351'],
                                [1, '#1450e6']
                            ],
                            width: 3
                        }
                    },
                    axisLabel: { // 坐标轴小标记
                        textStyle: { // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#1450e6'
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: '#1450e6',
                            shadowColor: '#1450e6', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: { // 分隔线
                        length: 25, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#1450e6'
                        }
                    },
                    title: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        // borderColor: 'red',
                        offsetCenter: [0, '50%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff',
                            fontSize: 38

                        }
                    },
                    data: [{
                        value: 93,
        //              name: '平均关联成功率'
                    }]
                },
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

export default Gauge_YBP_ChartComponent;