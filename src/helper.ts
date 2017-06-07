import { Message } from 'discord.js';

class RecordHelper {

	private readonly keyword: string = '!record';

	constructor() {}

	public isCalled(message: Message): boolean {
		return (message.content.toLowerCase().substring(0, this.keyword.length) == this.keyword);
	}

	public getParams(message: Message): string {
		return message.content.toLowerCase().replace(this.keyword, '').trim();
	}
}

export { RecordHelper };