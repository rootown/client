import OpenAPIClientAxios from 'openapi-client-axios';
import { OpenAPIV3 } from 'openapi-types';

import { Client, Components } from './client';
import def from './openapi.json';

export import Schemas = Components.Schemas;

export const definition = def as unknown as OpenAPIV3.Document;

export function createClient(): Client {
	const api = new OpenAPIClientAxios({
		definition: definition as any,
	});
	api.withServer({ url: `https://data.rootown.io` });
	return api.initSync();
}
