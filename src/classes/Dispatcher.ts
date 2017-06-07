import { Message } from 'discord.js';
import { ReCordHelper } from './../helpers/ReCordHelper';
import { Recorder } from './Recorder';

export class Dispatcher {

	private helper: ReCordHelper;
	private recorders: { [channelId: string]: Recorder } = {};

	constructor() {
		this.helper = new ReCordHelper();
	};

	public processMessage(message: Message) {
		var param = this.helper.getParams(message);
		var channelId = message.channel.id;

		switch (param) {
			case 'start':
				console.log('Recording channel: ' + channelId);
				this.recorders[channelId] = new Recorder(message.member.voiceChannel);
				break;
			case 'stop':
				console.log('Stop recording channel: ' + channelId);
				this.recorders[channelId].destroy();
				delete this.recorders[channelId];
				break;
			default:
				message.reply('Unsupported argument!')
		}
	}
}