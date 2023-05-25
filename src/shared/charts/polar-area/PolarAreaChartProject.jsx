import React from 'react';
import {PolarAreaChart} from "./PolarAreaChart";

const PolarAreaChartProject = ({prices}) => {
    const labels = ["floor", "walls", "ceiling", "furniture", "plumbing", "doors", "decor", "lighting", "technique"]
    const dataList = labels.map(label => prices[label])

    return (
        <PolarAreaChart labels={labels} dataList={dataList}/>
    );
};

export default PolarAreaChartProject