import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import MenuButton from '../components/MenuButton';


const CategoriesScreen = (props) => {
    const renderGridItem = (data) => {
        return (
            <CategoryGridTile onSelect={() => NAV.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: data.item.id
                }
            })} item={data.item} />
        )
    }
    const { navigation:NAV } = props;
    return (
        <ScrollView>
            <FlatList 
                keyExtractor={(item,index)=>item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </ScrollView>
    );
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (<MenuButton navigation={navData.navigation} />)
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;