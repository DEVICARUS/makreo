#! /usr/bin/env node

'use strict'
var makreo = require('./lib/main')

const meow = require('meow');

const cli = meow(`
	Usage
	  $ makreo [path to your macros directory]

	Examples
	  $ makreo ~/Documents/Macros
`);

makreo(cli.input[0])