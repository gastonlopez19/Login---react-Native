import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    text: {
        fontSize: 18
    }
})

const List = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={style.container}>
            <Text
                style={style.text}>{item}</Text>
        </TouchableOpacity>
    );
}

export default List;