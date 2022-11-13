import { useState } from 'react';
import { StyleSheet, TextInput, View, Text,FlatList, SafeAreaView, Button, Image, Alert, TouchableHighlight, Pressable, Platform } from 'react-native';
export default function Form({addHandler}) {
    const [text, setValue] = useState('');
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите задачу...'/>
            <Button title= 'Добавить задачу' onPress={() => addHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: '20%',
        width: '60%'
    }
});