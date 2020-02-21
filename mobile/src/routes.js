import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Info from './pages/Info';
import About from './pages/About';
import Plant from './pages/Plant';
import Knowledge from './pages/Knowledge';
import Under2m from './pages/Sidewalk/Under2m';
import Over2m from './pages/Sidewalk/Over2m';
import Neighbor from './pages/Courtyard/Neighbor';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerShown: false
        }
      },
      Info: {
        screen: Info,
        navigationOptions: {
          title: 'Arboriza São Leo'
        }
      },
      About: {
        screen: About,
        navigationOptions: {
          title: 'Sobre'
        }
      },
      Plant: {
        screen: Plant,
        navigationOptions: {
          title: 'Plantar'
        }
      },
      Knowledge: {
        screen: Knowledge,
        navigationOptions: {
          title: 'Conhecer'
        }
      },
      Under2m: {
        screen: Under2m,
        navigationOptions: {
          title: 'Calçada - Até 2 metros'
        }
      },
      Over2m: {
        screen: Over2m,
        navigationOptions: {
          title: 'Calçada - Mais de 2 metros'
        }
      },
      Neighbor: {
        screen: Neighbor,
        navigationOptions: {
          title: 'Pátio'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: null,
        headerStyle: {
          backgroundColor: '#445c3c'
        }
        // headerTitleAlign: 'center'
      }
    }
  )
);

export default Routes;
