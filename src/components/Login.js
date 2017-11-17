import React , { Component } from 'react';

import Button from './Button'
import InputField from './InputField'
import { View } from 'react-native';

export default class Login extends Component<{}> {
  render() {
    return (
      <View>
        <InputField label={'Username'} placeHolder={'Enter your username'} returnKeyType={'done'}/>
        <Button buttonText={'Login'}/>
      </View>
    );
  }
};