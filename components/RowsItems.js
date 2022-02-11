import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RowsItems = () => {
    const items = ['One', 'Two', 'Three', 'Five', 'Six', 'Saven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twel', 'Thisteen']
    return (
        <View style={styles.container}>
            {
                items.map((item, i) => {
                    return (
                        <View key={i} style={styles.items}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default RowsItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10
    },
    items: {
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        padding: 10,
        margin: 10,
        alignItems: 'center',

        // marginBottom: 15,
        // paddingLeft: 10,
    },
    text: {
        color: 'blue',
        fontSize: 20,
    }
})