import React from 'react';
import LineSeries from '../charts/LineSeries';

function LineChart() {
	return (
		<div className="w-[50%] bg-base-100 rounded-md p-4">
			<h1 className="text-xl font-semibold">WebSites Overtime</h1>
			<LineSeries />
		</div>
	);
}

export default LineChart;
