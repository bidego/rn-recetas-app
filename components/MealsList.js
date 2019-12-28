import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const MealsList= props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMeal = data => {
        const goDetails = () => {
            const isFavorite = favMeals.some(meal => meal.id === data.item.id);
            props.navigation.navigate({
                routeName: 'MealDetails',
                params: {
                    item: data.item,
                    isFav: isFavorite
                }
            });
        }
        return (
            <MealItem
                onSelect={goDetails}
                item={data.item}
            />
        )
    }

    return (<View style={styles.list}>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMeal}
            style={{width:'100%'}}
        />
    </View>);
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});

export default MealsList;