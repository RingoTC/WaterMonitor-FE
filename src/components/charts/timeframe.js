"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// 生成每天的时间序列函数
const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = new Date(baseval);
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({ x, y });
        baseval += 86400000;
        i++;
    }
    return series;
};

const CombinedChart = () => {
    // 第一个趋势数据的状态
    const [series1, setSeries1] = useState([
        {
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
    ]);

    // 第二个趋势数据的状态
    const [series2, setSeries2] = useState([
        {
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 30,
            }),
        },
    ]);

    // 第三个趋势数据的状态
    const [series3, setSeries3] = useState([
        {
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
    ]);

    // 第一个图表的配置
    const options1 = {
        chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['#008FFB'],
        xaxis: {
            type: 'datetime',
        },
    };

    // 第二个图表的配置
    const options2 = {
        chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['#546E7A'],
        xaxis: {
            type: 'datetime',
        },
    };

    // 第三个图表的配置
    const options3 = {
        chart: {
            id: 'yt',
            group: 'social',
            type: 'area',
            height: 160,
        },
        colors: ['#00E396'],
        xaxis: {
            type: 'datetime',
        },
    };

    return (
        <div id="wrapper">
            {/* 第一个图表 */}
            <div id="chart-line">
                <ReactApexChart options={options1} series={series1} type="line" height={160} />
            </div>

            {/* 第二个图表 */}
            <div id="chart-line2">
                <ReactApexChart options={options2} series={series2} type="line" height={160} />
            </div>

            {/* 第三个图表 */}
            <div id="chart-area">
                <ReactApexChart options={options3} series={series3} type="area" height={160} />
            </div>
        </div>
    );
};
export default CombinedChart;