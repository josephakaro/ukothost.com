// src/components/CreateDroplet.js
import React, { useState } from 'react';
import axiosInstance from '../api/api';

const CreateDroplet = () => {
	const [name, setName] = useState('');
	const [region, setRegion] = useState('');
	const [size, setSize] = useState('');
	const [image, setImage] = useState('');

	const createDroplet = async () => {
		try {
			const response = await axiosInstance.post('/droplets', {
				name,
				region,
				size,
				image,
			});
			console.log('Droplet created:', response.data);
		} catch (error) {
			console.error('Error creating droplet:', error);
		}
	};

	return (
		<div>
			<h2>Create Droplet</h2>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Region"
				value={region}
				onChange={(e) => setRegion(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Size"
				value={size}
				onChange={(e) => setSize(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Image"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<button onClick={createDroplet}>Create Droplet</button>
		</div>
	);
};

export default CreateDroplet;
