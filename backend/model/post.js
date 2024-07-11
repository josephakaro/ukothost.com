const { DataTypes, or } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');

const Post = sequelize.define('Post', {
	postId: {
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
	postTitle: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	postContent: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	postCategory: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	postStatus: {
		type: DataTypes.ENUM('pending', 'approved', 'published', 'denied'),
		defaultValue: 'pending',
		allowNull: false,
	},
});

module.exports = Post;
