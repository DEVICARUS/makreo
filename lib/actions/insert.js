const fs = require('fs');
const glob = require('glob');

module.exports = (action) => {
	return new Promise((resolve, reject) => {
		const regex = new RegExp(action.regex);

		glob(action.target, (err, files) => {
			if (err) reject(err);

			files.forEach(target => {
				const file = fs.readFileSync(target, 'utf-8');
				const replace = regex.exec(file);

				let content;
				switch (action.position) {
					case 'Before':
						content = `${action.content}${replace}`;
						break;
					case 'After':
						content = `${replace}${action.content}`;
						break;
					default:
						reject(new Error('Position undefined'));
						content = replace;
						break;
				}

				fs.writeFile(target, file.replace(replace, content), (err) => {
					if (err) reject(err);
					resolve(err);
				});
			});
		});
	});
};
