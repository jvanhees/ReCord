import { Message } from 'discord.js';
import { Config } from './../interfaces/Config';

export class ReCordHelper {

	private handle: string = '!record';

	constructor() { }

	public isCalled(message: Message): boolean {
		return (message.content.toLowerCase().substring(0, this.handle.length) == this.handle);
	}

	public getParams(message: Message): string {
		return message.content.toLowerCase().replace(this.handle, '').trim();
	}
}