import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button
        title='Back To Home'
        onPress={()=>navigation.goBack()}
      />
          <Button
        title='Back To Home'
        onPress={()=>navigation.push("Home")}
      />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})