import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import MenuButton from '../components/MenuButton';

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state=>{
        return state.meals.favoriteMeals
    });

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