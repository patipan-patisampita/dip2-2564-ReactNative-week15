import { Text, View } from 'react-native';
import styles from "./Style";

import React from 'react';

const MyComponent = () => {

    const textTitle = { fontSize: 20, color: 'green' };

    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
            <Text style={{ color: 'blue', fontSize: 20 }}>My Name is Mr.Mark Sakaberg</Text>
            <Text style={textTitle}>I am Owner  of Facebook</Text>
            <Text style={styles.textTitle}>React Native Framework</Text>
        </View>
    )
}

export default MyComponent;