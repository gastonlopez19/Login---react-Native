import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 18,
    }
});

const Item = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {item}
            </Text>
        </TouchableOpacity>
    );
}

export default Item;