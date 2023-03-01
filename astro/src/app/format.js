// https://www.npmjs.com/package/tinyduration
import * as td from 'tinyduration';

export const recipe = (recipe) => {
	recipe.totalTimeDuration = recipe?.totalTime?.length ? td.parse(recipe.totalTime) : '';
	recipe.totalTimeFormatted = `${
		recipe?.totalTimeDuration?.hours ? `${recipe.totalTimeDuration.hours} hours ` : '' +
		recipe?.totalTimeDuration?.minutes ? `${recipe.totalTimeDuration.minutes} minutes` : ''
	}`

	if (typeof recipe.recipeInstructions === 'string') {
		recipe.recipeInstructions = recipe.recipeInstructions.split('. ').map(instruction => {
			return { text: instruction};
		});
	}

	if (Array.isArray(recipe.image) && recipe.image.length && typeof recipe.image[0] === 'string'){
		recipe._image = recipe.image;
		recipe.image = recipe.image[0];
	}

	return recipe;
}
