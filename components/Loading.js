import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Loading = ({ navigation }) => {

    useEffect( () => {
        const queryToken = async () => {
            const token = await AsyncStorage.getItem('TOKEN');
            
            if(token){
                if (token.length) {
                    navigation.navigate('Home');
                } else {
                    navigation.navigate('Login');
                }
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