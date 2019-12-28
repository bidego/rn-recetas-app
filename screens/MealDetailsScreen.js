import React, { useEffect, useCallback } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NoteCard from '../components/NoteCard';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailsScreen = (props) => {
    const item = props.navigation.getParam('item');
    const dispatch = useDispatch();
    const curFavMeal = useSelector(state=> state.meals.favoriteMeals.some(m=>m.id===item.id));

    // useCallback recrea a funcion solo cuando alguna de las dependencias
    // pasadas en el array del segundo parámetro cambia
    const handleToggleFavorite = useCallback(() => {
        dispatch(toggleFavorite(item.id));
    }, [dispatch, item]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: handleToggleFavorite});
    }, [handleToggleFavorite]);

    useEffect(() => {
        props.navigation.setParams({isFav: curFavMeal});
    }, [curFavMeal]);

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.container}>
                <ImageBackground
                    resizeMode= 'cover'
                    style={{flex:1,width:'100%',height:'100%'}}
                    source={{uri: item.imageUrl}}
                >
                    <View style={styles.receiptContainer}>
                        <View style={styles.ul}>
                            <NoteCard items={[
                                `${item.duration} minutes`,
                                `${item.complexity.toUpperCase()}`,
                                `${item.affordability.toUpperCase()}`]}
                                title={item.title} />
                        </View>
                        <View>
                            <NoteCard items={item.ingredients} title='Ingredients' />
                        </View>
                        <View>
                            <NoteCard items={item.steps} title='Steps' />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam('item');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: meal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavorite} />
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '80%'
    },
    receiptContainer: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        margin:10,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        width: '100%'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 100
    },
    title: {
        color: 'black'
    },
    paragraph: {
        color: 'black'
    }
})

export default MealDetailsScreen;