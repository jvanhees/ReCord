import { Client, TextChannel, Message, Collection } from 'discord.js';

import { Config } from './interfaces/Config';
import { RecordHelper } from './helpers/RecordHelper';

var config: Config = require('./../config.json');

var helper: RecordHelper = new RecordHelper(config.handle);
var client: Client = new Client;

var token: string = config.token;

client.on('ready', () => {
	console.log('Client is ready');
});

client.on('message', (message: Message): void => {
	if (helper.isCalled(message)) {
		message.reply('Got params: ' + helper.getParams(message));
	}
});

client.login(token);