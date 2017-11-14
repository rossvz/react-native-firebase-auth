import React, { Component } from 'react'
import firebase from 'firebase'

import { View, Text } from 'react-native'
import { Button, Header, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {authenticated: null}
  }

  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyCbwzxI5IIdN05_AdWjfVDu7SWu7SgQn54',
      authDomain: 'rn-tut-auth.firebaseapp.com',
      databaseURL: 'https://rn-tut-auth.firebaseio.com',
      projectId: 'rn-tut-auth',
      storageBucket: '',
      messagingSenderId: '396254854288'
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({authenticated: !!user})
    })
  }

  logOut () {
    firebase.auth().signOut()
  }

  renderContent () {
    switch (this.state.authenticated) {
      case true:
        return <View >
          <Button text={'Log Out'} onPress={this.logOut.bind(this)} />
        </View >
      case false:
        return <LoginForm />
      default:
        return <View ><Spinner /></View >
    }
  }

  render () {
    return (
      <View >
        <Header title={'Auth'} />
        {this.renderContent()}
      </View >
    )
  }
}

export default App
