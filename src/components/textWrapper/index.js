import React from 'react';
import {Text} from 'react-native';

const TextWrapper = ({text, style = {}, onPress}) => (
  <Text onPress={onPress} style={style}>
    {text}
  </Text>
);

export default TextWrapper;
