import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

const Line_YHRZ_ChartComponent = React.createClass({
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
        // let option = this.state.option;
        // let dataLen = option.series[0].data.length;
        // this.currentIndex = (this.currentIndex + 1) % dataLen;
    },
    componentDidMount: function() {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
        this.timeTicket = setInterval(this.fetchNewDate, 1000);
    },
    componentWillUnmount: function() {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
    },
    getOption: function() {
        const option = {
            color: [
                '#21c6a5', '#65c7f7', '#096dc5'
            ],
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                },
                axisPointer: {
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    }
                }
            },
            calculable: true,
            xAxis: [{
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
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            yAxis: [{
                splitNumber: 0,
                axisLabel: {
                    show: false,
                    inside: 'true'
                    // formatter: '{value} ml'
                },
                type: 'value',
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
            }],
            series: [{
                name: '光猫',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [10, 12, 21, 54, 260, 830, 710]
            }, {
                name: '胖AP',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [30, 182, 434, 791, 390, 30, 10]
            }, {
                name: '三合一',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [1320, 1132, 601, 234, 120, 90, 20]
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

export default Line_YHRZ_ChartComponent;