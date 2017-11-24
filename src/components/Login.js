import React , { Component } from 'react';

import Button from './Button/Button'
import InputField from './InputField'
import { View, StyleSheet } from 'react-native';

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <InputField label={'Username'} placeHolder={'Enter your username'} returnKeyType={'done'}/>
        <InputField label={'Password'} placeHolder={'Enter your password'} returnKeyType={'done'}/>
        <Button buttonText={'Login'} onClick={this.login}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});