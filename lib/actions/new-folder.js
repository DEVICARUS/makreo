const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = (action) => {
	return new Promise((resolve, reject) => {
		glob(action.path, (err, folders) => {
            if (err) reject(err);
            
			folders.forEach((target) => {
				fs.mkdir(path.join(target, action.folder_name), (err) => {
					if (err) reject(err);
					resolve(err);
				});
			});
		});
	});
};
