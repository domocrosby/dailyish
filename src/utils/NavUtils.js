import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { defaultButton } from '../config/Styles';

export const DrawerButton = ({ navigation }) => (
  <NavButton
    onPress={() => navigation.openDrawer()}
    icon='menu'
  />
);

export const NavButton = ({ onPress, icon }) => (
  <TouchableOpacity
    onPress={onPress}
    style={defaultButton}
  >
    <Icon
      name={icon}
      color='white'
    />
  </TouchableOpacity>
);
