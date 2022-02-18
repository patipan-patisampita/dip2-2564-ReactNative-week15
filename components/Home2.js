import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to MyHome</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Text></Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />

      <Text></Text>
      <Button
        title="Go to About"
        onPress={() => navigation.replace("About")}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})