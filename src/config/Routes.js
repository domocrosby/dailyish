import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
//import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import TodayScreen from '../screens/TodayScreen';
import HabitsScreen from '../screens/HabitsScreen';
//import TodayEditScreen from '../screens/TodayEditScreen';
import { defaultNavigationStyles } from './Styles';

//TODO - insert the below as a stack navigator
// const TodayNavigator = createStackNavigator({
//   CategoryList: {
//     screen: CategoryScreen,
//     navigationOptions: {
//       title: "Category",
//       header: // any custom header here
//     }
//   },
// });

const drawerScreens = createDrawerNavigator({
  TodayScreen: { screen: TodayScreen },
  HabitsScreen: { screen: HabitsScreen },
  //TodayScreen: TodayNavigator
}, {
  initialRouteName: 'TodayScreen'
})

const appNavigator = createStackNavigator(
  {
    drawer: { screen: drawerScreens },
  },
  {
    initialRouteName: 'drawer',
    //defaultNavigationOptions: defaultNavigationStyles,
    //transitionConfig: getSlideFromRightTransition
  }
);

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;
