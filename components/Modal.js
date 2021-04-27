import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../hooks/Hooks';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelar: {
        height: 20,
        borderBottomColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4040',
        paddingVertical: 10,
    },
    aceptar: {
        height: 20,
        borderBottomColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1696ff',
        paddingVertical: 10,
    }
})

const Modal = ({ navigation }) => {
    const id = navigation.getParam('_id');
    const GET = API(`platos/${id}`, axios.get);
    const data = {
        id_platos: id,
    }

    const AddRequest = async () => {
        alert('Se agregado su Pedido');
        const token = await AsyncStorage.getItem('TOKEN');
        const api = await axios.post('https://serverless.miguelangelmo.vercel.app/api/pedidos', data, {
            headers: {
                authorization: token
            }
        });
        if(api.status !== 200){
            navigation.navigate('Login');
        }else {
            navigation.navigate('Home');
        }
        //
    }
    return (
        <View style={styles.container}>
            {
                Object.keys(GET).length ?
                    <View>
                        <Text>{GET.name}</Text>
                        <Text>{GET.description}</Text>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#f59', true)}
                            onPress={() => AddRequest()}>
                            <View style={styles.aceptar}>
                                <Text>
                                    Aceptar
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('#f59', true)}
                            onPress={() => navigation.goBack()}>
                            <View style={styles.cancelar}>
                                <Text>Cancelar</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    :
                    (<Text>Cargando...</Text>)
            }
        </View>
    );
}

export default Modal;