import 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard, Portals, Skills, ThirdParties } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { theme } from './src/services/theme.service';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme} >
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({route}) => ({
            drawerContentStyle: {
              backgroundColor: '#ECE8E1'
            },
            drawerActiveBackgroundColor: 'black',
            drawerActiveTintColor: 'white',
            headerStyle: {
              backgroundColor: '#ECE8E1'
            }
          })}
        >
          <Drawer.Screen
            options={{
              drawerIcon: ({focused}) => (<MaterialCommunityIcons name="view-dashboard-outline" size={20} color={focused ? "white" : 'black'} />)
            }} name='Dashboard' component={Dashboard}
          />
          <Drawer.Screen options={{
              drawerIcon: ({focused}) => (<MaterialCommunityIcons name="lightbulb-on-outline" size={20} color={focused ? "white" : 'black'} />)
            }} name='Skills' component={Skills} />
          <Drawer.Screen name='Portals' component={Portals} />
          <Drawer.Screen name='ThirdParties' component={ThirdParties} />
          <Drawer.Screen options={{
              drawerIcon: ({focused}) => (<Ionicons name="md-people-outline" size={20} color={focused ? "white" : 'black'} />)
            }} name='Interviewers' component={ThirdParties} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
