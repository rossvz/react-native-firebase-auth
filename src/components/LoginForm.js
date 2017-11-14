import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, Button, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {email: '', password: '', message: '', loading: false}
  }

  onButtonPress () {
    this.setState({...this.state, error: '', loading: true})
    this.loginUser()
  }

  loginUser () {
    const {email, password} = this.state
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.createUser.bind(this))
  }

  createUser () {
    const {email, password} = this.state
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
  }

  onLoginFail () {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  onLoginSuccess () {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    })
  }

  renderButton () {
    if (this.state.loading) return <Spinner size={'small'} />
    return <Button text={'Login'}
      onPress={this.onButtonPress.bind(this)} />
  }

  render () {
    return (
      <Card >
        <CardSection >
          <Input
            label={'Email'}
            placeholder={'test@user.com'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection >

        <CardSection >
          <Input
            secure
            label={'Password'}
            placeholder={'password'}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})} />
        </CardSection >

        <Text style={styles.errorTextStyles} >
          {this.state.error}
        </Text >

        <CardSection >
          {this.renderButton()}
        </CardSection >

      </Card >
    )
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

LoginForm.propTypes = {}
LoginForm.defaultProps = {}

export default LoginForm
