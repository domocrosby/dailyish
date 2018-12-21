import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DailyScreen extends Component {
  static navigationOptions = {
    title: 'Edit'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Edit Screen</Text>
      </View>
    );
  }
}
