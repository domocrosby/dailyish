import React, { Component } from 'react';
import { View } from 'react-native';
import HabitList from '../components/HabitList';

export default class DailyScreen extends Component {
  static navigationOptions = {
    title: 'Habits'
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HabitList />
      </View>
    );
  }
}
