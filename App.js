import Home from './components/Home';
import Modal from './components/Modal';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppRouteNav = createStackNavigator({
  Home: {
    screen: Home
  },
},
  {
    initialRouteName: 'Home'
  });

const OnBoardingNavegation = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName === 'Login' ? 'Iniciar Sesión' : 'Registrate',
    headerTitleAlign: 'center'
  })
})

const RouteMain = createStackNavigator({
  Main: AppRouteNav,
  Modal
}, {
  mode: "modal",
  headerMode: 'none'
})

const BaseStack = createSwitchNavigator({
  Loading,
  OnBoarding: OnBoardingNavegation,
  Root: RouteMain,
}, {
  initialRouteName: 'Loading'
})

const AppNav = createAppContainer(BaseStack);

export default AppNav;

