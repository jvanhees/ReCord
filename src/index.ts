import { Client, Message, VoiceChannel, VoiceConnection } from 'discord.js';

import { Config } from './interfaces/Config';
import { ReCordHelper } from './helpers/ReCordHelper';
import { Dispatcher } from './classes/Dispatcher';

var config: Config = require('./../config.json');

var helper: ReCordHelper = new ReCordHelper();
var dispatcher: Dispatcher = new Dispatcher();
var client: Client = new Client;


client.on('ready', () => {
	console.log('Client is ready');
});


client.on('message', (message: Message): void => {
	// Only listen to the handle
	if (!helper.isCalled(message)) {
		return;
	}

	// We can only do stuff when the member is in a channel.
	if (!message.member.voiceChannel) {
		message.reply('Please join a channel first!');
		return;
	}

	dispatcher.processMessage(message);
});

client.login(config.token);