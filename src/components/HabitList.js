import React, { Component } from 'react';
import { View } from 'react-native';
import TaskEdit from './TaskEdit';

class HabitList extends Component {
  state = { habits: [] };
  componentWillMount() {
    //.json returns promise so another then is needed
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData) => this.setState({ habits: responseData }));
  }
  renderAlbums() {
    return this.state.habits.map(habit =>
      <TaskEdit key={habit.title} habit={habit} />
    );
  }
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default HabitList;
