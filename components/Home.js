import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import List from './List';

// hooks
import { API } from '../hooks/Hooks';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    }
})

const Home = ({ navigation }) => {

    const GET = API('platos', axios.get);

    return (
        <View style={style.container}>
            {GET.length ?
                <FlatList
                    style={style.list}
                    data={GET}
                    renderItem={({ item }) => <List
                        item={item.name}
                        onPress={() => navigation.navigate('Modal', {
                            _id: item._id
                        })} />}
                    keyExtractor={(item) => String(item._id)}
                />
                : (<Text>Cargando...</Text>)}
        </View>
    );
}

Home.navigationOptions = ({
    title: 'Comida Disponibles',
})

export default Home;