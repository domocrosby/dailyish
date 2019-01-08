import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { defaultButton } from '../config/Styles';
import HabitList from '../components/HabitList';

export default class DailyScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Habits',
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={defaultButton}
        >
          <Icon
            name={'menu'}
            color='white'
          />
        </TouchableOpacity>
      )
    });
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HabitList />
      </View>
    );
  }
}
