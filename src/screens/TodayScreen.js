import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { defaultButton } from '../config/Styles';

export default class TodayScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Today',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('TodayEditScreen')}
          style={defaultButton}
        >
          <Icon
            name={'edit'}
            color='white'
          />
        </TouchableOpacity>
      ),
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Daily Screens</Text>
      </View>
    );
  }
}
