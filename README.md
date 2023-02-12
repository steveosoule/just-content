# just-content

View a web page without adds and unique/cluttered UIs. Just schema presented in a user-friendly way.

## API

### Recipes

#### Valid 

##### JSON Schema

- http://localhost:3000/view?url=https://ballerinafarm.com/blogs/recipes/ballerina-farm-sourdough-bread
- http://localhost:3000/view?url=https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara
- http://localhost:3000/view?url=https://tastesbetterfromscratch.com/german-pancakes-2/
- http://localhost:3000/view?url=http://www.mccormick.com/Recipes/Soups-Stews/Corn-and-Potato-Chowder
- http://localhost:3000/view?url=https://www.tasteofhome.com/recipes/buffalo-chicken-dip/
- http://localhost:3000/view?url=https://www.food.com/recipe/skyline-chili-dip-87361

#### Invalid

- http://localhost:3000/api/recipe.json?url=https://www.foodnetwork.com/recipes/food-network-kitchen/gatorade-margarita-3757681
- http://localhost:3000/api/recipe.json?url=https://www.allrecipes.com/recipe/68461/buffalo-chicken-dip/
- http://localhost:3000/api/recipe.json?url=https://cookpad.com/us/recipes/16726986-buttermilk-banana-bread-or-muffins
