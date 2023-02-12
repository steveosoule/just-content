import { parseRecipeFromUrl } from '../../app/parser';

export async function get({params, request}) {
	const url = new URL(request.url);
	const response = await parseRecipeFromUrl({
		url: url.searchParams.get('url')
	});

	return {
		body: JSON.stringify({
			...response
		})
	};
  }
  