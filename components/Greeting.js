import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Child component
const ShowGreeting = (props) => {
    return (
        <View>
            <Text>Hello {props.name} Your age is {props.age}, National is {props.national} </Text>
        </View>
    )
}

//Parent component
const Greeting = () => {
    return (
        <View style={styles.center}>
            <Text>Welcome</Text>
            <ShowGreeting name='Tony' age={45} national='Thialand' />
            <ShowGreeting name='Mark' age={45+3} national='USA' />
            <ShowGreeting name='Steav' age={50} national='Rusian' />
        </View>
    );
};

export default Greeting;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    }
});
