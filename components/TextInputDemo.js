import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react';

const TextInputDemo = () => {
    const [inputName, setInputName] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 25, marginBottom: 10 }}>Register</Text>
            <View style={styles.items}>
                <Text>Name</Text>
                <TextInput
                    style={styles.TextInput}
                    defaultValue={inputName}
                    onChangeText={setInputName}
                    keyboardType="numeric"
                />
                <Text>{inputName}</Text>
            </View>

            <View style={styles.items}>
                <Text>Password</Text>
                <TextInput
                    style={styles.TextInput}
                    defaultValue={inputPassword}
                    secureTextEntry={true}
                    onChangeText={setInputPassword}
                />
                <Text>{inputPassword}</Text>
            </View>
        </View>

    )
}

export default TextInputDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    items: {
        marginBottom: 15,
    },
    TextInput: {
        height: 10,
        color: "black"
    }

})