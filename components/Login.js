import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Button,
    TouchableHighlight,
    Alert,
    AsyncStorage,
} from 'react-native';
import useForm from '../hooks/Form';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    form: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 10,
        alignSelf: 'stretch',
        paddingHorizontal: 5
    },
    register: {
        color: 'blue',
        marginTop: 10
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

const Login = ({ navigation }) => {

    const initialState = {
        email: '',
        password: '',
    }

    const onSubmit = async (vals) => {
        const api = await axios.post('https://serverless.miguelangelmo.vercel.app/api/auth/login', vals);
        if (api.data === 'Hubo un error, intente de nuevo'
            || api.data === 'Hubo un error') {
            Alert.alert('Verifica tus Datos', 'Ha ocurrido un error, al ingresar tus datos');
        } else {
            AsyncStorage.setItem('TOKEN', api.data);
            navigation.navigate('Home');
        }
    }

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}> E-Mail </Text>
            <TextInput style={styles.form}
                autoCapitalize='none'
                value={inputs.email}
                onChangeText={subscribe('email')}
                placeholder="Ingresa tu E-Mail"
            />
            <Text style={styles.subTitle}> Password </Text>
            <TextInput style={styles.form}
                autoCapitalize='none'
                value={inputs.password}
                onChangeText={subscribe('password')}
                placeholder="Ingresa tu Password"
                secureTextEntry={true}
            />
            <Button title='Iniciar Sesión'
                onPress={handleSubmit}
            />
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.register}>Registrate Grstís</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Login;