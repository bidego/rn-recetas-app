import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, ImageBackground, StyleSheet, Platform } from 'react-native';
import BText from './BText';

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={props.onSelect}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground
                            source={{uri: props.item.imageUrl}}
                            style={styles.mealImage}
                        >
                            <View style={styles.titleContainer}>
                                <BText style={styles.title}>{props.item.title}</BText>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetails}}>
                        <BText style={styles.text}>{props.item.duration}m</BText>
                        <BText style={styles.text}>{props.item.complexity.toUpperCase()}</BText>
                        <BText style={styles.text}>{props.item.affordability}</BText>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '15%',
        justifyContent: 'space-between'
    },
    mealImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {

    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize:18,
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    text: {
        color: 'black'
    }
})

export default MealItem;