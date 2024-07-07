// src/components/DeleteDroplet.js
import React, { useState } from 'react';
import axiosInstance from '../api/api';

const DeleteDroplet = () => {
	const [dropletId, setDropletId] = useState('');

	const deleteDroplet = async () => {
		try {
			const response = await axiosInstance.delete(
				`/droplets/${dropletId}`
			);
			console.log('Droplet deleted:', response.data);
		} catch (error) {
			console.error('Error deleting droplet:', error);
		}
	};

	return (
		<div>
			<h2>Delete Droplet</h2>
			<input
				type="text"
				placeholder="Droplet ID"
				value={dropletId}
				onChange={(e) => setDropletId(e.target.value)}
			/>
			<button onClick={deleteDroplet}>Delete Droplet</button>
		</div>
	);
};

export default DeleteDroplet;
