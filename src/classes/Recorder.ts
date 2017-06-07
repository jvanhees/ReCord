import { VoiceChannel } from 'discord.js';

export class Recorder {

	private channel: VoiceChannel;
	public isActive: boolean = false;

	constructor(channel: VoiceChannel) {
		this.channel = channel;

		this.init();
	}

	private init() {
		if (this.channel.joinable) {
			// Join the voice channel
			this.channel.join();

			// Start listening to channel


			this.isActive = true;
		}

	}

	public destroy() {
		// Destroy the listener
		
		// Clean up recorded files

		// Leave the channel
		this.channel.leave();
	}
}