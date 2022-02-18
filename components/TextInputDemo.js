import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'

const TextInputDemo = () => {

  // สร้าง state ไว้เก็บค่าที่ได้รับจาก TextInput
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputMemo, setInputMemo] = useState('')

  const onPressButton = () => {
    let msg = 'บันทึกข้อมูลเรียบร้อย'
    if (inputName === '') {
      msg = 'กรุณาป้อนชื่อก่อน'
    } else if (inputEmail === '') {
      msg = 'กรุณาป้อนอีเมล์ก่อน'
    } else if (inputPassword === '') {
      msg = 'กรุณากำหนดรหัสผ่านก่อน'
    }
    Alert.alert(
      'แจ้งเตือน',
      msg,
      [
        {
          text:'ตกลง'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, marginBottom:20}}>Register</Text>

      <View style={styles.items}>
        <Text>Name</Text>
        <TextInput
          style={styles.textInput}
          defaultValue={inputName}
          onChangeText={setInputName}
          // keyboardType='phone-pad'
          // keyboardType='email-address'
          // keyboardType='numeric'
          // keyboardType='decimal-pad'
          keyboardType='number-pad'
        />
        <Text>{inputName}</Text>
      </View>

      <View style={styles.items}>
        <Text>Email</Text>
        <TextInput 
          style={styles.textInput} 
          defaultValue={inputEmail}
          onChangeText={setInputEmail}
          keyboardType='email-address'
        />
        <Text>{inputEmail}</Text>
      </View>

      <View style={styles.items}>
        <Text>Password</Text>
        <TextInput 
          style={styles.textInput} 
          defaultValue={inputPassword}
          secureTextEntry={true}
          onChangeText={setInputPassword}
        />
        <Text>{inputPassword}</Text>
      </View>

      <View style={styles.items}>
        <Text>Memo</Text>
        <TextInput 
          style={[styles.textInput,{height: 100}]}
          multiline={true} 
          numberOfLines={5}
          defaultValue={inputMemo}
          textAlignVertical='top'
          onChangeText={setInputMemo}
        />
        <Text>{inputMemo}</Text>
      </View>
      
      <View style={styles.items}>
        <Button title="บันทึกข้อมูล" onPress={onPressButton}/>
      </View>
    </View>
  )
}

export default TextInputDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20, 
    marginLeft: 20, 
    marginRight: 20
  },
  items: {
    marginBottom: 5
  },
  textInput: {
    height: 36, 
    color: 'black', 
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: '#aaa',
    marginTop: 5, 
    paddingTop: 3, 
    paddingBottom: 3,
    paddingLeft:20,
    borderRadius:18
  },
})
