import React from 'react';
import { View, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';
import Card from '../components/Card';
import BText from '../components/BText';

const NoteCard = props => {
    return (
        <View>
            <Card>
                <TitleText style={{fontSize: 16}}>{props.title}</TitleText>
            </Card>
            {props.items.map( (item)=>(
                <Card
                    keyExtractor={(item,index) => item}
                    style={styles.li}
                >
                    <BText style={styles.paragraph}>- {item}</BText>
                </Card>))}
        </View>);
}

const styles = StyleSheet.create({
    paragraph: {
        color: 'black',
        fontSize: 16
    },
    li: {
        backgroundColor: 'rgba(20,20,20,0.5)'
    }
})

export default NoteCard;