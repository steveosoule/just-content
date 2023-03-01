// https://www.npmjs.com/package/tinyduration
import * as td from 'tinyduration';

import {decode} from 'html-entities';

export const invalidlyEncodedString = (value) => {
	return decode(String(value).replace('&amp;nbsp;', '&nbsp;'));
}

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

	recipe.recipeInstructions = recipe.recipeInstructions.map(step => {
		step.text = invalidlyEncodedString(step.text);
		return step;
	});

	recipe.recipeIngredient = recipe.recipeIngredient.map(invalidlyEncodedString);

	if (Array.isArray(recipe.image) && recipe.image.length && typeof recipe.image[0] === 'string'){
		recipe._image = recipe.image;
		recipe.image = recipe.image[0];
	}

	return recipe;
}
