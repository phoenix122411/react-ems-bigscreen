import React from 'react';
import echarts from 'echarts';
import ReactEcharts from '../../src/echarts-for-react';

// 指定图表的配置项和数据
var x_data = [['学校','医院','码头','酒店','公园'],
              ['机场','浴室','商场','游乐场','文化厅','车站'],
              ['饭馆','图书馆','展览馆','美容店','体育场','招待所']];
var y_data = [[37, 77.4, 58, 14.7, 25],
              [67.1, 25.4, 78.1, 19.8, 29.1, 67.9],
              [72, 75.4, 6.8, 40.8, 19.6, 37.3]];
const Scatter_HotSpot_ChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
    getInitialState: function() {
        return {option: this.getOption()};
    },
    showToolTip: function(echartObj) {
        let option = this.state.option;
        let hotspot_index = 0;
        let currentIndex = -1;
        setInterval(function() {
            let dataLen = option.series[0].data.length;
            currentIndex++;
            if(currentIndex == dataLen) {
                currentIndex = -1;
                hotspot_index = (hotspot_index + 1) % x_data.length;
                
                // 重新加载图表内容
                option.xAxis.data = x_data[hotspot_index];
                option.series[0].data = y_data[hotspot_index];
                echartObj.setOption(option, true);
                
                // 取消之前高亮的图形
                echartObj.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                
                // 隐藏 tooltip
                echartObj.dispatchAction({
                    type: 'hideTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
            } else {
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
            }
        }, 2000);
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    getOption: function() {
        const option = {
            tooltip: {
                itemGap: '  0',
                axisPointer: {
                    type: 'shadow'
                }
            },
            //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            //      offset: 0,
            //      color: '#333'
            //  }, {
            //      offset: 1,
            //      color: '#333'
            //  }]),
            xAxis: {
                type : 'category',
                data : x_data[0],
                axisLine: {
                    show: true,
                    onZero: true,
                    lineStyle: {
                        color: '#aaa',
                        width: 1,
                        type: 'solid',
                        opacity: 1,
                    },
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                axisLine: {
                    show: true,
                    onZero: true,
                    lineStyle: {
                        color: '#aaa',
                        width: 1,
                        type: 'solid',
                        opacity: 1,
                    },
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: '',
                data: y_data[0],
                type: 'scatter',
                symbolSize: function(data) {
                    return data;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function(param) {
                            return param.data;
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
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

export default Scatter_HotSpot_ChartComponent;