import React from 'react';
import { View, Text } from 'react-native';

const Datails = ({ navigation }) => {
    const body = navigation.getParam('body');
    const title = navigation.getParam('title');
    return (
        <View>
            <Text>{body}</Text>
            <Text>{title}</Text>
        </View>
    )
}

export default Datails;