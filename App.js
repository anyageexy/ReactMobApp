import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Button, Image, Alert, TouchableHighlight, Pressable, Platform } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
export default function App() {

    const [listOfItems, setListofItems] = useState([
        { text: 'Купить молоко', key: '1' },
        { text: 'Сварить молоко', key: '2' },
        { text: 'Сьездить к бабуле', key: '3' },
        { text: 'Купить овощи', key: '4' },
        { text: 'Приготовить еду', key: '5' },
    ])
    const addHandler = (text) => {
        setListofItems((list) => {
            return [
                { text: text, key: Math.random().toString(36).substring(7) },
                ...list
            ]
        })
    }
    const deleteHandler = (key) => {
        setListofItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        })
    }
    return (
        <View>
            <Header />
            <Form addHandler={addHandler} />
            <View>
                <FlatList data={listOfItems} renderItem={({ item }) => (
                    <ListItem el={item} deleteHandler={deleteHandler} />
                )} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});
