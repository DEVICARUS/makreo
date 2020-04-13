const fs = require('fs');
const path = require('path')
const glob = require('glob')

module.exports = (action) => {
	return new Promise((resolve, reject) => {
		glob(action.path, (err, folders) => {
			if (err) reject(err);

			folders.forEach(target => {
				fs.writeFile(path.join(target, action.filename), action.content, (err) => {
					if (err) reject(err);
					resolve(err);
				});
			});
		});
	});
};
