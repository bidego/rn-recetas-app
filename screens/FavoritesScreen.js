import React from 'react';
import MealsList from '../components/MealsList';
import MenuButton from '../components/MenuButton';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm2');
    return (
        <MealsList listData={favMeals} navigation={props.navigation} />
    )
}
FavoritesScreen.navigationOptions = navData=> {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (<MenuButton navigation={navData.navigation} />)
    }
}

export default FavoritesScreen;