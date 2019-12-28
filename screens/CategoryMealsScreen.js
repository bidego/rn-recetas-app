import React from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import BText from '../components/BText';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter( meal => meal.categoriesIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <BText>No meals to display, check you filters.</BText>
            </View>
        )
    }
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