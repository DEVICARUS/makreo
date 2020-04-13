const execall = require('execall')

const regex = /(?:`)(.+)(?::`)(?: |(?:\s```.*\s))((?<=\n)[\s\S]*?(?=\s```)|.*)(?:\s```)?/g;

module.exports = (macro) => {
	const actionsRaw = macro.split('---');

	return actionsRaw.map(actionRaw => {
		const matches = execall(regex, actionRaw)

		var action =  {}
		matches.map(match => {
			action[match.subMatches[0].toLowerCase().replace(/ /g, '_')] = match.subMatches[1]
		})
		return action
	})
};
