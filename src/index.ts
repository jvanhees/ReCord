import { Client, TextChannel, Message, Collection } from 'discord.js';

var client: Client = new Client;
var token: string = 'MzIyMDMzMzcyNjE4Njg2NDY1.DBms6A.8eIekN5M5FQg4aH0rz4GH_4pu2M';

client.on('ready', () => {
	console.log('Client is ready');
});

client.on('message', message => {
	if (message.content == 'ping') {
		message.reply('pong');
	}
});

client.login(token);