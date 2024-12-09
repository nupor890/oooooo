module.exports = function (input) {
	const force = false;

	const Users = require("./includes/database/models/users")(input);
	const Threads = require("./includes/database/models/threads")(input);
	const Currencies = require("./includes/database/models/currencies")(input);

	Users.sync({ force });
	Threads.sync({ force });
	Currencies.sync({ force });

	return {
		model: {
			Users,
			Threads,
			Currencies
		},
		use: function (modelName) {
			return this.model[`${modelName}`];
		}
	}
}
