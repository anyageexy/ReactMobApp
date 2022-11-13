import { StyleSheet, View, Text, FlatList, SafeAreaView, Button, Image, Alert, TouchableHighlight, Pressable, Platform } from 'react-native';

export default function ListItem({ el, deleteHandler}) {


    return (
        <TouchableHighlight onPress={() => deleteHandler(el.key)} style={styles.listContainer}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 7,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    listContainer: {
        marginTop: 20
    }
});
