class Meal {
    constructor(id, categoriesIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
        this.id = id;
        this.categoriesIds = categoriesIds;
        this.title = title;
        this.complexity = complexity;
        this.affordability = affordability;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isLactoseFree = isLactoseFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
    }
}

export default Meal;