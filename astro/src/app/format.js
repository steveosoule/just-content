// https://www.npmjs.com/package/tinyduration
import * as td from 'tinyduration';

import {decode} from 'html-entities';

import striptags from 'striptags';


export const invalidlyEncodedString = (value) => {
	return decode(String(value).replace('&amp;nbsp;', '&nbsp;'));
}

export const cleanString = (value) => {
	value = String(value).trim();
	value = invalidlyEncodedString(value);
	value = striptags(value, '<a>');

	return value;
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
		step.text = cleanString(step.text);
		return step;
	});

	recipe.recipeInstructions.filter(step => {
		return step?.text?.length;
	})

	recipe.recipeIngredient = recipe.recipeIngredient.map(cleanString).filter(ingredient => ingredient?.length);

	if (Array.isArray(recipe.image) && recipe.image.length && typeof recipe.image[0] === 'string'){
		recipe._image = recipe.image;
		recipe.image = recipe.image[0];
	}

	return recipe;
}
