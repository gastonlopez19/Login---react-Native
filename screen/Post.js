import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Item from './Item';

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

const Post = ({ navigation }) => {

    const id = navigation.getParam('id');
    const [state, setstate] = useState([]);

    const query = async () => {
        const api = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await api.json();
        setstate(json);
    }

    useEffect(() => {
        query();
    }, [])

    return (
        <View style={styles.container}>
            {state.length ?
                <FlatList
                    data={state.filter(x => x.userId === id)}
                    renderItem={({ item }) => (
                        <Item item={item.title}
                            onPress={() => navigation.navigate('Datails', {
                                title: item.title, body: item.body
                            })} />
                    )}
                    keyExtractor={(item) => String(item.id)}
                />
                : <Text>Cargando...</Text>
            }
        </View>
    )
}

export default Post;