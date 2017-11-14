import React, { Component } from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
  return (<View style={styles.viewStyle} >
    <Text style={styles.textStyle} >{props.title}</Text >
  </View >)
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export { Header }
