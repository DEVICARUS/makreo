const fs = require('fs');
const glob = require('glob');

module.exports = (action) => {
	return new Promise((resolve, reject) => {
		const regex = new RegExp(action.regex, "g");

		glob(action.target, (err, files) => {
			if (err) reject(err);

			files.forEach((target) => {
				const file = fs.readFileSync(target, 'utf-8');
				fs.writeFile(target, file.replace(regex, action.content), (err) => {
					if (err) reject(err);
					resolve(err);
				});
			});
		});
	});
};
