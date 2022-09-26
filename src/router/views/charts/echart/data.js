
import { graphic } from 'echarts/lib/export'

const data = [
    [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
    ]
]


let data1 = [];
for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data1.push([r, i]);
}

const polarChart = {
    polar: {
        legend: {
            data: ["line"],
            textStyle: {
                color: '#999'
            }
        },
        polar: {
            center: ["50%", "54%"]
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            }
        },
        angleAxis: {
            type: "value",
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [
            {
                coordinateSystem: "polar",
                name: "line",
                type: "line",
                showSymbol: false,
                data: data1
            }
        ],
        animationDuration: 2000
    }
};


const barChart = {
    xAxis: {
        data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", 'Q7', 'Q8', 'Q9'],
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    series: [
        {
            type: "bar",
            data: [63, 75, 24, 92, 60, 48, 78, 48, 58],
        }
    ],
    legend: {
        data: ["Value"]
    },
    color: ["#127ac2"]
};

const lineChart = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['Desktops', 'Laptops', 'Tablets'],
        textStyle: {
            color: '#999'
        }
    },
    series: [{
        name: 'Desktops',
        type: 'line',
        stack: 'yes',
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: 'Laptops',
        type: 'line',
        stack: 'yes',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: 'Tablets',
        type: 'line',
        stack: 'yes',
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    ]
};

const pieChart = {
    visualMap: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 25,
        data: ['series-1', 'series-2', 'series-3', 'series-4', 'series-5'],
        textStyle: {
            color: '#999'
        }
    },
    series: [
        {
            name: 'series',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'series-1' },
                { value: 310, name: 'series-2' },
                { value: 234, name: 'series-3' },
                { value: 135, name: 'series-4' },
                { value: 150, name: 'series-5' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const scatterChart = {
    legend: {
        right: 20,
        data: ['1990', '2015'],
        textStyle: {
            color: '#999'
        }
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    series: [
        {
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2
            },
            label: {
                emphasis: {
                    show: true,
                    formatter({ data }) {
                        return data[3]
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }
                    ])
                }
            }
        },
        {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2
            },
            label: {
                emphasis: {
                    show: true,
                    formatter({ data }) {
                        return data[3]
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }
                    ])
                }
            }
        }
    ]
};

const doughnutChart = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 25,
        data: ['series-1', 'series-2', 'series-3', 'series-4', 'series-5'],
        textStyle: {
            color: '#999'
        }
    },
    series: [
        {
            name: 'series',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'series-1' },
                { value: 310, name: 'series-2' },
                { value: 234, name: 'series-3' },
                { value: 135, name: 'series-4' },
                { value: 1548, name: 'series-5' }
            ]
        }
    ]
};

export { polarChart, barChart, lineChart, pieChart, scatterChart, doughnutChart };
