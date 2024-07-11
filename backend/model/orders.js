const { DataTypes, or } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Order = sequelize.define('Order', {
	orderId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	userId: {
		type: DataTypes.INTEGER,
		references: {
			model: User,
			key: 'userId',
		},
	},
	orderTitle: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	orderDescription: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	orderTotal: {
		type: DataTypes.DECIMAL,
	},
	orderStatus: {
		type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
		defaultValue: 'pending',
		allowNull: false,
	},
});

module.exports = Order;
