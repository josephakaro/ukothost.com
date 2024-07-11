const sequelize = require('../config/sequelize');
const User = require('../model/user');
const Ticket = require('../model/ticket');
const Order = require('../model/orders');
const Post = require('../model/post');
const Knowledge = require('../model/knowledge');

// sync the model with the database
const syncDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log('✅ Success: Connection has been established.');

		// sync the model with the database
		await User.sync({ force: false });
		console.log('=================================\n');
		console.log('✅ Success: User table created.\n');
		console.log('=================================\n');

		await Ticket.sync({ force: false });
		console.log('=================================\n');
		console.log('✅ Success: Ticket table created.\n');
		console.log('=================================\n');

		await Knowledge.sync({ force: false });
		console.log('=================================\n');
		console.log('✅ Success: Knowledge Base table created.\n');
		console.log('=================================\n');

		await Order.sync({ force: false });
		console.log('=================================\n');
		console.log('✅ Success: Order table created.\n');
		console.log('=================================\n');

		await Post.sync({ force: false });
		console.log('=================================\n');
		console.log('✅ Success: Post table created.\n');
		console.log('=================================\n');
	} catch (error) {
		console.error('\n⛔ Error:\n        ', error.message, '\n');
	} finally {
		await sequelize.close();
		console.log('❎ Success: Connection has been closed.');
	}
};

module.exports = syncDatabase;
