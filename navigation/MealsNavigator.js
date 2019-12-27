import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/colors';
import Strong from '../components/Strong';
import { Platform } from 'react-native';

const defaultStackNavOpts = {
    defaultNavigationOptions: {
        //        headerTransparent: true,
        headerTitle: 'Recetas app',
        headerBackgroundTransitionPreset: 'toggle',
        headerStyle: {
            backgroundColor: Colors.primaryOpaque
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: 'white'
    }
};
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailsScreen
}, defaultStackNavOpts);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
},defaultStackNavOpts);

const tabNavigationConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (<Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />)
            },
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Strong>Meals</Strong> : 'Meals'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (<Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />)
            },
            tabBarColor: Colors.secondary,
            tabBarLabel: Platform.OS === 'android' ? <Strong>Favorites!</Strong> : 'Favorites!'
        }
    }
};

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, {
    defaultNavigationOptions: defaultStackNavOpts
})

FiltersScreen.navigationOptions = {
    headerTitle: 'Filter Meals'
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabNavigationConfig,{
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primary
        }
    })
    : createBottomTabNavigator(tabNavigationConfig,{
    tabBarOptions: {
        activeTintColor: Colors.secondary
    }
})

const mainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Favotites'
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filters'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyles: {
            fontFamily: 'open-sans'
        }
    } 
});
export default createAppContainer(mainNavigator);