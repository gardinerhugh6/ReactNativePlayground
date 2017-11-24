import React from 'react';
import T from 'prop-types';

import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput style={styles.input}
                 placeHolder={props.placeHolder}
                 returnKeyType={props.returnKeyType}/>
    </View>
  );
};

InputField.propTypes = {
  label: T.string,
  placeHolder: T.string,
  returnKeyType: T.string
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  input: {
    fontSize: 10,
    borderBottomWidth: 1,
    height: 20,
    width: 100
  }
});