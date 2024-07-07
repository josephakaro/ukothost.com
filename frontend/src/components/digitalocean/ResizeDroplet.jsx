// src/components/ResizeDroplet.js
import React, { useState } from 'react';

const ResizeDroplet = () => {
	const [dropletId, setDropletId] = useState('');
	const [size, setSize] = useState('');

	const resizeDroplet = async () => {
		try {
			const response = await axiosInstance.post(
				`/droplets/${dropletId}/actions`,
				{
					type: 'resize',
					size,
				}
			);
			console.log('Droplet resizing:', response.data);
		} catch (error) {
			console.error('Error resizing droplet:', error);
		}
	};

	return (
		<div>
			<h2>Resize Droplet</h2>
			<input
				type="text"
				placeholder="Droplet ID"
				value={dropletId}
				onChange={(e) => setDropletId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Size"
				value={size}
				onChange={(e) => setSize(e.target.value)}
			/>
			<button onClick={resizeDroplet}>Resize Droplet</button>
		</div>
	);
};

export default ResizeDroplet;
