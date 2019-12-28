import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter( meal => meal.categoriesIds.indexOf(catId) >= 0);

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