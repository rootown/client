import axios from 'axios';
import { writeFile } from 'fs/promises';

(async () => {
	await writeFile('openapi.json', (await axios.get<string>('https://data.rootown.io/openapi.json', {
		responseType: 'text'
	})).data);
})().catch(console.error);
