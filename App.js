import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyComponent from './components/MyComponent';

const App = () => {

  const TextPlain = {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ยินดีต้อนรับ</Text>
      <Text style={TextPlain}>เข้าสู่ React Native Mobile App</Text>
      <Text style={[styles.textTitle,TextPlain,{marginBottom:40}]}>Hello Every one</Text>
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 20,
    paddingTop: 30,
  },
  textTitle: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  }
})
export default App;
