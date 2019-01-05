import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HabitList extends Component {
  state = { habits: [] };
  componentWillMount() {
    //.json returns promise so another then is needed
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData) => this.setState({ habits: responseData }));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Text> List of Habits</Text>
      </View>
    );
  }
}

export default HabitList;
