import { Client, TextChannel, Message, Collection } from 'discord.js';
import { RecordHelper } from './helper';

var helper: RecordHelper = new RecordHelper;
var client: Client = new Client;

var token: string = 'MzIyMDMzMzcyNjE4Njg2NDY1.DBms6A.8eIekN5M5FQg4aH0rz4GH_4pu2M';

client.on('ready', () => {
	console.log('Client is ready');
});

client.on('message', (message: Message): void => {
	if (helper.isCalled(message)) {
		message.reply('Got params: ' + helper.getParams(message));
	}
});

client.login(token);