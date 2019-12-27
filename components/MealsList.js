import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealsList= props => {
    
    const renderMeal = data => {
        const goDetails = () => {
            props.navigation.navigate({
                routeName: 'MealDetails',
                params: {
                    item: data.item
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