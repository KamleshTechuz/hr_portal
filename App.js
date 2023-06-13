import 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard, Portals, Skills, ThirdParties } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Skills' component={Skills} />
        <Drawer.Screen name='Portals' component={Portals} />
        <Drawer.Screen name='ThirdParties' component={ThirdParties} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
