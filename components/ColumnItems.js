import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const ColumnItems = () => {
    const items = ['One', 'Two', 'Three', 'Five', 'Six', 'Saven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twel', 'Thisteen']

    return (
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                {
                    items.map((item,i) => {
                        return (
                            <View key={i} style={styles.items}>
                                <Text>{item}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default ColumnItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    items: {
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        height: 60,
        marginBottom: 15,
        paddingLeft: 10,
    },
    text: {

    }
})