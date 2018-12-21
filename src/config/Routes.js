import { createAppContainer, createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import DailyScreen from '../screens/DailyScreen';
import EditScreen from '../screens/EditScreen';
import { defaultNavigationStyles } from './Styles';

const appNavigator = createStackNavigator(
  {
    DailyScreen: { screen: DailyScreen },
    EditScreen: { screen: EditScreen },
  },
  {
    initialRouteName: 'DailyScreen',
    defaultNavigationOptions: defaultNavigationStyles,
    transitionConfig: getSlideFromRightTransition
  }
);

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;
