// src/components/ListDroplets.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/api';

const ListDroplets = () => {
	const [droplets, setDroplets] = useState([]);

	useEffect(() => {
		const fetchDroplets = async () => {
			try {
				const response = await axiosInstance.get('/droplets');
				setDroplets(response.data.droplets);
			} catch (error) {
				console.error('Error fetching droplets:', error);
			}
		};

		fetchDroplets();
	}, []);

	return (
		<div>
			<h2>Droplets</h2>
			<ul>
				{droplets.map((droplet) => (
					<li key={droplet.id}>
						<p>Name: {droplet.name}</p>
						<p>IP Address: {droplet.networks.v4[0]?.ip_address}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListDroplets;
