import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const btnClick = () => {

        Alert.alert(
            "แจ้งเตือน",
            "Wecome to react native",
            [
                {
                    text: 'ตกลง',
                    onPress: () => { alert("คุณตกลง") }
                },
                {
                    text: 'ยกเลิก',
                    onPress: () => { alert("คุณยกเลิก") }
                }, {
                    text: 'ภายหลัง',
                    onPress: () => { alert("คุณกดภายหลัง") }
                }
            ]
        )
    }

    return (
        <View>
            <Button title='Show Alert' onPress={btnClick} />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({})