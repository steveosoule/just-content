import { parse } from 'node-html-parser';

export const parseUrl = async ({url} = {}) => {
	const response = await fetch(url);
	const body = await response.text();
	const jsonLds = parseDocumentForJsonLdScripts(body);
	return {
		result: true,
		meta: {
			url,
			bodyLength: body?.length ?? 0,
		},
		data: {
			jsonLds
		}
	}
}

export const parseRecipeFromUrl = async (options) => {
	const parsed = await parseUrl(options);
	const recipes = [...parsed.data.jsonLds.filter(schema => schema['@type'] === 'Recipe')];

	return {
		recipes: [
			...recipes
		]
	}
		
}

export const parseDocumentForJsonLdScripts = (body) => {
	const root = parse(body);
	return [...root.querySelectorAll('script[type="application/ld+json"]')].map(parseJsonLdScript);
}

export const parseJsonLdScript = (script) => {
	return JSON.parse(script.innerHTML);
}

export default {
	parseUrl,
	parseRecipeFromUrl,
	parseDocumentForJsonLdScripts,
	parseJsonLdScript
};
