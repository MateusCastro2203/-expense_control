import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProps extends TouchableOpacityProps {
  onPressButton: () => void;
  title?: string;
}

export const Button = ({onPressButton, title, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      {...rest}
      style={styles.container}>
      <Icon name="user" color="#000" size={70} />
    </TouchableOpacity>
  );
};
