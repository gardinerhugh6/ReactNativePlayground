import React from 'react';
import T from 'prop-types';

import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text>{props.buttonText}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onClick: T.func,
  buttonText: T.string
};

export default Button;