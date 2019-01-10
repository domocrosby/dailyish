import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavButton, DrawerButton } from '../utils/NavUtils';

export default class TodayScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Today',
      headerRight: (
        <NavButton
          onPress={() => navigation.navigate('TodayEditScreen')}
          icon='edit'
        />
      ),
      headerLeft: (
        <DrawerButton navigation={navigation} />
      )
    });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Daily Screens</Text>
      </View>
    );
  }
}
