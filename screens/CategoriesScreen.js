import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
    const { navigate } = props.navigation;
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title='go to meals!' onPress={() => navigate({routeName:'CategoryMeals'})} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;