import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secure}) => {
  const {containerStyle, labelStyle, inputStyle} = styles
  return (
    <View style={containerStyle} >
      <Text style={labelStyle} >{label}</Text >
      <TextInput
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText} />
    </View >
  )
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
    opacity: 0.5
  },
  inputStyle: {
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23
  }
}

export { Input }
