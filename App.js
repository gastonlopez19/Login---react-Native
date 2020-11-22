import Home from './screen/Home';
import Post from './screen/Post';
import Datails from './screen/Datails';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const ScreenApp = createStackNavigator({
  Home: {
    screen: Home,
  },
  Post: {
    screen: Post,
  },
  Datails: {
    screen: Datails,
  },
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(ScreenApp);
