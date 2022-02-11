import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'


const CounterState = () => {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20, fontSize: 24 }}>You Clicked {count} times</Text>
            <Button onPress={() => { setCount(count + 1) }} title=" + Counter up" />
            
            <Button onPress={() => { setCount(count - 1) }} title="- Counter Down" />
        </View>
    )
}

export default CounterState

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
