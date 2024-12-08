module.exports = function (input) {
	const force = false;

	const Users = require("./NAZRUL/includes/database/models/users")(input);
	const Threads = require("./NAZRUL/includes/database/models/threads")(input);
	const Currencies = require("./NAZRUL/includes/database/models/currencies")(input);

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
