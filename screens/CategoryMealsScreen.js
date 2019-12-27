import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter( meal => meal.categoriesIds.indexOf(catId) >= 0);

    return (
        <MealsList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c=>c.id===catId);
    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsScreen;