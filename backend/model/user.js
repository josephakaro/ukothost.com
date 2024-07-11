const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// User Model
const User = sequelize.define('User', {
	userId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	authId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	userImage: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	userName: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	userRole: {
		type: DataTypes.ENUM('admin', 'user'),
		defaultValue: 'user',
		allowNull: false,
	},
	userStatus: {
		type: DataTypes.ENUM('active', 'inactive'),
		defaultValue: 'active',
		allowNull: false,
	},
	userOnline: {
		type: DataTypes.BOOLEAN, // True or False
		allowNull: false,
	},
});

module.exports = User;
