import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import getData from './data';

const LineSeries = () => {
	const [options, setOptions] = useState({
		title: {
			text: '',
		},
		data: getData(),
		series: [
			{
				type: 'line',
				xKey: 'month',
				yKey: 'websites',
				yName: 'Websites',
			},
		],
	});

	return <AgCharts options={options} />;
};

export default LineSeries;
