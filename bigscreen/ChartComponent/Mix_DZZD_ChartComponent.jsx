import React from 'react';
import ReactEcharts from '../../src/echarts-for-react';

const Mix_DZZD_ChartComponent = React.createClass({
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
            option.series[3].data[0].value = option.series[0].data[currentIndex];
            option.series[3].data[1].value = option.series[1].data[currentIndex];
            option.series[3].data[2].value = option.series[2].data[currentIndex];
            echartObj.setOption(option,true);
        }, 2000);
        echartObj.setOption(option);
    },
    fetchNewDate: function() {
        var now = new Date(); //定义一个时间对象
        //var y = now.getFullYear(); //获取完整的年份(4位,1970-????)
        var m = now.getMonth()+1; //获取当前月份(0-11,0代表1月)
        var d = now.getDate(); //获取当前日(1-31) 
        var datas = [];
        for (var i = d-5; i <= d; i++) {
            datas.push(m+"/"+i);
        }
        return datas;
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    getOption: function() {
        const option = {
            title: {
                text: '',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: this.fetchNewDate(),
                    axisLine: {
                        show: true,
                        onZero: true,
                        boundaryGap: true,
                        lineStyle: {
                            color: '#aaa',
                            width: 1,
                            type: 'solid',
                            opacity: 1
                        }
                    }
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '',
                    max: 1000,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    axisLine: {
                        show: true,
                        onZero: true,
                        lineStyle: {
                            color: '#aaa',
                            width: 1,
                            type: 'solid',
                            opacity: 1,
                        }
                    }
                },
                {
                    type: 'value',
                    show: false,
                    name: '',
                    max: 1000,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                }
            ],
            series: [
                {
                    name:'正常',
                    type:'bar',
                    data:(function (){
                        var res = [];
                        var len = 6;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    })(),
                    itemStyle:{normal:{
                        color:'#21c6a5'
                    }}
                },
                {
                    name:'故障',
                    type:'bar',
                    data:(function (){
                        var res = [];
                        var len = 6;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    })(),
                    itemStyle:{normal:{
                        color:'#65c7f7'
                    }}
                },
                {
                    name:'离线',
                    type:'bar',
                    data:(function (){
                        var res = [];
                        var len = 6;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    })(),
                    itemStyle:{normal:{
                        color:'#096dc5'
                    }}
                },
                {
                    name: '设备状态百分比',
                    type: 'pie',
                    center: ['65%', '35%'],
                    radius: '18%',
                    tooltip : {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    label: {
                        normal: {
                            formatter: '{b} : {d}%',
                            textStyle: {
                                color: '#fff',
                                fontFamily: '微软雅黑, Arial, Verdana, sans-serif',
                                fontSize: 19,
                            }
                        }
                    },
                    itemStyle:{normal:{
                        label: {show:true},
                        labelLine : {
                            show:true,
                            length : 20
                        },
                        color:function(params){
                            var colorList=['#21c6a5', '#65c7f7', '#096dc5'];
                            return colorList[params.dataIndex];
                        }
                    }},
                    data: [
                            {value:100, name:'正常'},
                            {value:100, name:'故障'},
                            {value:100, name:'离线'}
                    ]
                }
            ]
        };

        return option;
    },
    render: function() {
        return (
            <div className="left col-md-12 col-lg-12 col-sm-12">
                <div className="topH">
                    <h1>[ 定制终端设备状态统计 ]</h1>
                </div>
                <div className="Echart" ui-view="chart_2">
                    <div id="mix_DZZD" className="state">
                        <ReactEcharts ref='echarts_react' 
                        onChartReady={this.showToolTip} 
                        option={this.state.option} 
                        style={{height: '100%', width: '100%'}} />
                    </div>
                </div>
            </div>
        );
    }
});

export default Mix_DZZD_ChartComponent;