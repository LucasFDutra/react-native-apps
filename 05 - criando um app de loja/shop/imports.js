import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

const navigatorName = createStackNavigator({
  routeName: {
    screen: 'screenName',
    navigationOptions: {

    },
  },
}, {
  defaultNavigationOptions: {

  },
});

export default createAppContainer(Routes);
