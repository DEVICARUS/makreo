const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const format = new RegExp(/.+\.macro\.md/g)

const parse = require('./parser')
const execute = require('./handler')

module.exports = (macrosDir) => {
	var macrosArr = fs.readdirSync(macrosDir)
	var macrosArr = macrosArr.filter(file => {
		return format.test(file)
	})
	var macrosArr = macrosArr.map(file => {
		return file.replace('.macro.md', '')
	})

	inquirer
		.prompt([
			{
				type: 'list',
				name: 'macro',
				message: 'Which macro would you like to run?',
				choices: macrosArr
			}
		])
		.then((answers) => {
			const macroRaw = fs.readFileSync(path.join(macrosDir, answers.macro + '.macro.md'), 'utf-8');
			const macro = parse(macroRaw)
			
			execute(macro)			
		});
};
