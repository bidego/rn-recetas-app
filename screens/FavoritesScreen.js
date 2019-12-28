import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import MenuButton from '../components/MenuButton';
import BText from '../components/BText';

const FavoritesScreen = (props) => {
    const favMeals = useSelector(state=>{
        return state.meals.favoriteMeals
    });

    if (!favMeals || favMeals.length === 0) {
        return (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <BText>No Favorite meals selected. Andá al catalogo y elegí una.</BText>
            </View>)
    }
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