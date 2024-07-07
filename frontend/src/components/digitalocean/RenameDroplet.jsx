// src/components/RenameDroplet.js
import React, { useState } from 'react';
import axiosInstance from '../api/api';

const RenameDroplet = () => {
	const [dropletId, setDropletId] = useState('');
	const [name, setName] = useState('');

	const renameDroplet = async () => {
		try {
			const response = await axiosInstance.put(`/droplets/${dropletId}`, {
				name,
			});
			console.log('Droplet renamed:', response.data);
		} catch (error) {
			console.error('Error renaming droplet:', error);
		}
	};

	return (
		<div>
			<h2>Rename Droplet</h2>
			<input
				type="text"
				placeholder="Droplet ID"
				value={dropletId}
				onChange={(e) => setDropletId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={renameDroplet}>Rename Droplet</button>
		</div>
	);
};

export default RenameDroplet;
