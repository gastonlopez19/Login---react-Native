import React, { useEffect } from 'react';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';

const Loading = ({ navigation }) => {

    useEffect( () => {
        const queryToken = async () => {
            const token = await AsyncStorage.getItem('TOKEN');
            if (token.length) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }
        queryToken();
    }, [])

    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}

export default Loading;