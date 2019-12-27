import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp 
                style={{flex:1}}
                onPress={props.onSelect}
            >
                <View style={{...styles.container, backgroundColor: props.item.color}}>
                    <Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        overflow: Platform.OS==='android'?'hidden':'visible'
    },
    container: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 3 },
        padding:15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryGridTile;
