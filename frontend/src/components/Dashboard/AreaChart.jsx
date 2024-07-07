import React from 'react';
import upTime from '../charts/areachart/upTime';

function AreaChart() {
	return (
		<div className="w-[50%] bg-base-100 rounded-md p-4">
			<h1 className="text-xl font-semibold">Up Time chart</h1>
			<upTime />
		</div>
	);
}

export default AreaChart;
