import React, { useState, useEffect, useCallback } from 'react';
import { View, Switch, Platform, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MenuButton from '../components/MenuButton';
import Strong from '../components/Strong';
import TitleText from '../components/TitleText';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FiltersScreen = (props) => {
    const { navigation } = props;

    const [ isGlutenFree, setIsGlutenFree ] = useState(false);
    const [ isVegan, setIsVegan ] = useState(false);
    const [ isVegetarian, setIsVegetarian ] = useState(false);
    const [ isLactoseFree, setIsLactoseFree ] = useState(false);
    
    const saveFilters = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilter);

    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    },[saveFilters]);
    
    return (
        <View style={styles.screen}>
            <View>
                <TitleText style={styles.title}>AvailableFilter</TitleText>
                <FilterSwitch label='Vegan' state={isVegan} onChange={newVal => setIsVegan(newVal)} />
                <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newVal => setIsVegetarian(newVal)} />
                <FilterSwitch label='Gluten Free' state={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)} />
                <FilterSwitch label='Lactose Free' state={isLactoseFree} onChange={newVal => setIsLactoseFree(newVal)} />
            </View>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (<MenuButton navigation={navData.navigation} />),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Save'
                    iconName='ios-save'
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
}

const FilterSwitch = props => (<View style={styles.filterContainer}>
    <Strong style={styles.title}>{props.label}</Strong>
    <Switch
        trackColor={{true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
    />
</View>);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersScreen;