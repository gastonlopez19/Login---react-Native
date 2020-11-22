import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Button,
    TouchableHighlight,
    Alert
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

const Register = ({ navigation }) => {

    const initialState = {
        email: '',
        password: '',
    }

    const onSubmit = async (vals) => {
        const api = await axios.post('https://serverless.miguelangelmo.vercel.app/api/auth/register', vals)

        if (api.data === 'Registrado') {
            return Alert.alert('Exito', 'Te has registrado con exito', [{
                text: 'Ir a Inicio',
                onPress: () => navigation.navigate('Login')
            }]);
        } else {
            return Alert.alert('Error', 'El E-Mail ingresado ya existe', [{
                text: 'Vuelve a Intentar',
                onPress: () => navigation.navigate('Register'),
            }]);
        }
    }

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}> E-Mail </Text>
            <TextInput style={styles.form}
                autoCapitalize='none'
                type='text'
                value={inputs.email}
                onChangeText={subscribe('email')}
                placeholder="Ingresa tu E-Mail"
            />
            <Text style={styles.subTitle}> Password </Text>
            <TextInput style={styles.form}
                autoCapitalize='none'
                type='password'
                value={inputs.password}
                onChangeText={subscribe('password')}
                placeholder="Ingresa tu Password"
                secureTextEntry={true}
            />
            <Button title='Registrarme'
                onPress={handleSubmit}
            />
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.register}>Ya tengo una cuenta</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Register;