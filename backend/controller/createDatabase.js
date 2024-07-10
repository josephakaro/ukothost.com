const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

const DIGITALOCEAN_API_URL = process.env.DIGITALOCEAN_API_URL;
const DIGITALOCEAN_API_TOKEN = process.env.DIGITALOCEAN_API_TOKEN;

// Function to create a managed database

module.exports = createDatabase;
