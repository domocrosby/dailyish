import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TodayScreen from '../screens/TodayScreen';
import HabitsScreen from '../screens/HabitsScreen';

const TodayStack = createStackNavigator(
  {
    TodayScreen: { screen: TodayScreen },
    //TodaysEditScreen: { screen: TodaysEditScreen },
  },
  {
    navigationOptions: {
      drawerLabel: 'Today',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="today"
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  }
);

const HabitsStack = createStackNavigator(
  {
    Habits: { screen: HabitsScreen },
  },
  {
    navigationOptions: {
      drawerLabel: 'Habits',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="loop" 
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  }
);

const appNavigator = createDrawerNavigator(
  {
    Today: {
      path: '/',
      screen: TodayStack,
    },
    Habits: {
      path: '/habits',
      screen: HabitsStack,
    },
  },

  {
    initialRouteName: 'Habits',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;
