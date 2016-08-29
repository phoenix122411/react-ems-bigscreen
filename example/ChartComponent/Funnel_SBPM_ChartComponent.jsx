import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

var typeNameArray = [['浙江', '河北', '陜西', '河南', '山东', '甘肃', '海南'],
                     ['山西', '辽宁', '吉林', '黑龙江', '云南', '贵州'],
                     ['福建', '广东', '重庆', '上海', '四川', '湖北'],
                     ['湖南', '江西', '安徽', '江苏', '青海', '新疆'],
                     ['内蒙古', '宁夏', '西藏', '广西', '北京', '天津']];
var numberArray = [[812, 899, 890, 880, 870, 850, 70],
                   [812, 809, 779, 760, 710, 670],
                   [812, 600, 520, 570, 490, 460],
                   [812, 390, 360, 230, 200, 190],
                   [812, 150, 130, 120, 100, 99]];
const Funnel_SBPM_ChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
    getInitialState: function() {
        return {option: this.getOption()};
    },
    showToolTip: function(echartObj) {
        let option = this.state.option;
        let rank_index = 0;
        let currentIndex = -1;
        setInterval(function() {
            let dataLen = option.series[0].data.length;
            currentIndex++;
            if(currentIndex == dataLen) {
                currentIndex = -1;
                rank_index = (rank_index + 1) % typeNameArray.length;
                
                // 重新加载图表内容
                option.yAxis.data = typeNameArray[rank_index];
                option.series[0].data = numberArray[rank_index];
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
            //  color: [
            //      '#21c6a5', '#65c7f7', '#096dc5'
            //  ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
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
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: ['#ccc'],
                        width: 0,
                        type: 'solid',
                    },
                },
            },
            yAxis: {
                type: 'category',
                axisLabel: {
        //          interval: 0,
        //          rotate: 45,
        //          margin: 2,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                data: typeNameArray[0],
                nameTextStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 16
                },
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
            },
            series: [{
                type: 'bar',
                data: numberArray[0],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5', '#21c6a5', '#65c7f7', '#096dc5'];
                            return colorList[params.dataIndex];
                        }
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
                style={{height: 400}} />
        );
    }
});

export default Funnel_SBPM_ChartComponent;