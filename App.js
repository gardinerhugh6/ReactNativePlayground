import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/components/Login';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          React Native Plaground
        </Text>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: '#FF412F'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
