import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import TodayScreen from '../screens/TodayScreen';
import HabitsScreen from '../screens/HabitsScreen';
import { defaultNavigationStyles } from './Styles';

const TodayStack = createStackNavigator(
  {
    TodayScreen: { screen: TodayScreen },
    //TodaysEditScreen: { screen: TodaysEditScreen },
  },
  {
    defaultNavigationOptions: defaultNavigationStyles,
    navigationOptions: {
      drawerLabel: 'Today',
      drawerIcon: ({ tintColor }) => (
        <Icon
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
    defaultNavigationOptions: defaultNavigationStyles,
    navigationOptions: {
      drawerLabel: 'Habits',
      drawerIcon: ({ tintColor }) => (
        <Icon
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
