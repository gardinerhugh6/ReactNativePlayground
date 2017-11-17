import React from 'react';
import T from 'prop-types';

import { View, Text, TextInput } from 'react-native';

const InputField = (props) => {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput placeHolder={props.placeHolder}
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