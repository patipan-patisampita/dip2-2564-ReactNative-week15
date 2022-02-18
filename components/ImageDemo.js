import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDemo = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/avengers.jpg')}
                resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
                style={styles.img}
            />

            <Image
                source={require('../assets/images/avengers.jpg')}
                resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
                style={styles.img}
            />

            <Image
                source={require('../assets/images/avengers.jpg')}
                resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
                style={styles.img}
            />
            
            <Image
                source={{uri:'https://files.gqthailand.com/uploads/3515432-endgamedek.jpg'}}
                resizeMode='cover' // 'cover', 'contain', 'stretch', 'center'
                style={styles.img}
            />
        </View>
    )
}

export default ImageDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 70,
    },
    items: {
        marginBottom: 20,
    },
    img: {
        width: 140,
        height: 140,
        borderWidth: 1,
        borderColor: 'red',
    },
})