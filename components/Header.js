import { StyleSheet, View, Text, FlatList, SafeAreaView, Button, Image, Alert, TouchableHighlight, Pressable, Platform } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        paddingBottom: 20,
        heught: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center'
    }
});
