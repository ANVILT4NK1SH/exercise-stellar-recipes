showRecipes = (recipes) => {
  const container = document.querySelector(".js-recipes-grid");
  container.innerHTML = "";

  let htmlTemp = recipes.map(
		(recipe) => `
      <div class="recipe-container">
        <img class="recipe-img" src="${recipe.image}" alt="${recipe.title}">
        <h1 class="recipe-title">${recipe.title}</h1>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-details">
          <p class="ingredients">Ingredients: ${recipe.ingredients.join(
						", "
					)}</p>
          <p class="steps">Steps: ${recipe.steps.join(" ")}</p>
        </div>
      </div>`
	).join("");
  container.insertAdjacentHTML("beforeend", htmlTemp);
};

showRecipes(recipes);
