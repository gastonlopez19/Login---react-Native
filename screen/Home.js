import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

function Home({ navigation }) {

    const [api, setApi] = useState([]);

    const query = async () => {
        const api = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await api.json();
        setApi(json);
    }

    useEffect(() => {
        query();
    }, []);

    return (
        <View style={styles.container}>
            {api.length ?
                <FlatList
                    data={api}
                    renderItem={({ item }) => (
                        <Item item={item.name}
                            onPress={() => navigation.navigate('Post', {
                                id: item.id
                            })} />
                    )}
                    keyExtractor={(item) => String(item.id)}
                />
                : <Text>Cargando...</Text>
            }
        </View>
    );
}

export default Home;