import { AgCharts } from 'ag-charts-react';
import uptimeData from './uptimeData';

const upTime = () => {
	const data = uptimeData();
	const numFormatter = new Intl.NumberFormat('en-US');
	const total = data.reduce((sum, d) => sum + d['count'], 0);

	const options = {
		container: document.getElementById('myChart'),
		data,
		title: {
			text: 'Dwelling Fires (UK)',
		},
		footnote: {
			text: 'Source: Home Office',
		},
		series: [
			{
				type: 'donut',
				calloutLabelKey: 'type',
				angleKey: 'count',
				sectorLabelKey: '%',
				calloutLabel: {
					enabled: false,
				},
				sectorLabel: {
					formatter: ({ datum, sectorLabelKey }) => {
						const value = datum[sectorLabelKey];
						return numFormatter.format(value);
					},
				},
				title: {
					text: '',
				},
				innerRadiusRatio: 0.7,
				innerLabels: [
					{
						text: numFormatter.format(total),
						fontSize: 24,
					},
					{
						text: 'UpTime',
						fontSize: 16,
						spacing: 10,
					},
				],
				tooltip: {
					renderer: ({
						datum,
						calloutLabelKey,
						title,
						sectorLabelKey,
					}) => {
						return {
							title,
							content: `${
								datum[calloutLabelKey]
							}: ${numFormatter.format(datum[sectorLabelKey])}`,
						};
					},
				},
				sectorSpacing: 3,
			},
		],
	};
	return <AgCharts options={options} />;
};

export default upTime;
