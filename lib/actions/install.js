const fs = require('fs');
const { spawn } = require('child_process');

module.exports = (action) => {
	return new Promise((resolve, reject) => {
        let install 
        
		if (fs.existsSync(action.project_root + '/yarn.lock')) {
			install = spawn('yarn', [ 'add', action.package ]);
		} else {
			install = spawn('npm', [ 'install', action.package ]);
		}

		install.stdout.on('data', (data) => {
			resolve(data)
		});

		install.stderr.on('data', (data) => {
			reject(data)
		});

		install.on('close', (code) => {
			reject(code)
		});
	});
};
