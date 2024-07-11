const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

// Ticket Model
const Ticket = sequelize.define('Ticket', {
	ticketId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	userId: {
		type: DataTypes.INTEGER,
		ForiegnKey: true,
		references: { model: User, key: 'userId' },
		allowNull: false,
	},
	ticketTitle: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	ticketContent: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	ticketStatus: {
		type: DataTypes.ENUM('open', 'closed'),
		defaultValue: 'open',
		allowNull: false,
	},
	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	updated_at: {
		type: DataTypes.DATE,
		allowNull: false,
	},
});

module.exports = Ticket;
