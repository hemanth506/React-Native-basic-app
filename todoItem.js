import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, id, pressHandlerControl }) {
    return (
        <TouchableOpacity onPress={() => pressHandlerControl(id)}>
            <View style={styles.text}>
                <AntDesign name="delete" size={18} color="black" />
                <Text style={styles.textInput}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        // flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: "row",
    },
    textInput: {
        marginLeft:15
    }
})