const { DataTypes, or } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Knowledge = sequelize.define('Knowledge', {
	knowledgeId: {
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
	knowledgeTitle: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	knowledgeContent: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	knowledgeStatus: {
		type: DataTypes.ENUM('pending', 'published', 'archieved'),
		defaultValue: 'pending',
		allowNull: false,
	},
});

module.exports = Knowledge;
