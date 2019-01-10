import React, { Component } from 'react';
import { View } from 'react-native';
import HabitList from '../components/HabitList';
import { DrawerButton } from '../utils/NavUtils';

export default class DailyScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Habits',
      headerLeft: (
        <DrawerButton navigation={navigation} />
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
