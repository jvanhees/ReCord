import { Message } from 'discord.js';

class RecordHelper {

	private handle: string;

	constructor(handle: string) {
		this.handle = handle;
	}

	public isCalled(message: Message): boolean {
		return (message.content.toLowerCase().substring(0, this.handle.length) == this.handle);
	}

	public getParams(message: Message): string {
		return message.content.toLowerCase().replace(this.handle, '').trim();
	}
}

export { RecordHelper };