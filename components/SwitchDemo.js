import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

const SwitchDemo = () => {
    const [switchBluetooth, setSwitchBluetooth] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.text}>Bluetooth</Text>
                <Switch
                    value={switchBluetooth}
                    onValueChange={setSwitchBluetooth}
                />
            </View>
            <Text>Bluetooth: {JSON.stringify(switchBluetooth? 'ON':'OFF')}</Text>
        </View>
    )
}

export default SwitchDemo

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 70, marginLeft: 20, marginRight: 20 },
    items: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: { fontSize: 18 },
})
