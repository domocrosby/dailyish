import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { defaultButton } from '../config/Styles';

export default class DailyScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Dailyish',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('EditScreen')}
          style={defaultButton}
        >
          <Icon
            name={'edit'}
            color='white'
          />
        </TouchableOpacity>
      ),
    });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Daily Screens</Text>
      </View>
    );
  }
}
