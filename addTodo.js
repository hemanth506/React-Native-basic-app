import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


export default function AddTodo({submitHandler}) {
    const [newTodo, setNewTodo] = useState('')


    const changeHandler = (val) => {
        setNewTodo(val);
    }

    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder='New todo...'
            onChangeText={changeHandler}
            />
            <FontAwesome.Button name="list-alt" style={styles.buttonText} onPress={() => submitHandler(newTodo)}>
                Add to List
            </FontAwesome.Button>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal:8, 
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    buttonText: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"coral"
    }
})