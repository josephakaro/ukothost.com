const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Controllers

// Initialize express
const app = express();
dotenv.config();

// Environment variables
const PORT = process.env.PORT || 5001;
const DIGITALOCEAN_API_URL = process.env.DIGITALOCEAN_API_URL;
const DIGITALOCEAN_API_TOKEN = process.env.DIGITALOCEAN_API_TOKEN;

app.use(bodyParser.json());

// ================= Database ================//
// Create Managed Database
const createDatabase = async (
	name,
	engine = 'pg',
	version = '12',
	size = 'db-s-1vcpu-1gb',
	region = 'fra1'
) => {
	try {
		const response = await axios.post(
			`${DIGITALOCEAN_API_URL}/databases`,
			{
				name,
				engine,
				version,
				size,
				region,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${DIGITALOCEAN_API_TOKEN}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// Function to delete a managed database
const deleteDatabase = async (databaseId) => {
	try {
		const response = await axios.delete(
			`${DIGITALOCEAN_API_URL}/databases/${databaseId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${DIGITALOCEAN_API_TOKEN}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// ============= Droplet ================//

const createDroplet = async (
	name,
	region,
	size,
	image,
	password,
	backups = true,
	monitoring = true
) => {
	try {
		const response = await axios.post(
			`${DIGITALOCEAN_API_URL}/droplets`,
			{
				name,
				region,
				size,
				image,
				password,
				backups,
				monitoring,
				tags: ['ukothost-portfolio'],
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${DIGITALOCEAN_API_TOKEN}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// Function to delete a droplet
const deleteDroplet = async (dropletId) => {
	try {
		const response = await axios.delete(
			`${DIGITALOCEAN_API_URL}/droplets/${dropletId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${DIGITALOCEAN_API_TOKEN}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// ====== Endpoints ====== //

app.post('/create-server', async (req, res) => {
	const { name, password, type } = req.body;

	try {
		if (type === 'droplet') {
			const droplet = await createDroplet(
				name,
				'fra1',
				's-1vcpu-512mb-10gb',
				'ubuntu-20-04-x64',
				password
			);
			res.status(200).json(droplet);
		} else if (type === 'wordpress') {
			const wordpressDroplet = await createDroplet(
				name,
				'fra1',
				's-1vcpu-1gb',
				'ubuntu-20-04-x64',
				password
			);
			res.status(200).json(wordpressDroplet);
		} else if (type === 'database') {
			const database = await createDatabase(name);
			res.status(200).json(database);
		} else {
			res.status(400).json({ error: 'Invalid type specified' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// DELETE endpoint to delete a server (droplet or database)
app.delete('/delete-server/:type/:id', async (req, res) => {
	const { type, id } = req.params;

	try {
		if (type === 'droplet') {
			const deletionResponse = await deleteDroplet(id);
			res.status(200).json(deletionResponse);
		} else if (type === 'database') {
			const deletionResponse = await deleteDatabase(id);
			res.status(200).json(deletionResponse);
		} else {
			res.status(400).json({ error: 'Invalid type specified' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// App Entry Point
app.listen(PORT, () => {
	try {
		console.log(`Server is running on port ${PORT}`);
	} catch (error) {
		console.log('Error starting server');
	}
});
