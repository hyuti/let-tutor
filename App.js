import React from 'react';
import LogIn from './src/pages/auth/login';
import { AppProvider } from './src/provider/appProvider';
import { MenuProvider } from 'react-native-popup-menu';
import { createStackNavigator } from '@react-navigation/stack';
import Styles from './src/utils/style'
import { RootNavigation } from './src/routes/nav/rootNav';
import { NavigationOptions } from './src/routes/option';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  React.useEffect(() => {
    RootNavigation.isMountedRef.current = true;

    return () => (RootNavigation.isMountedRef.current = false);
  }, []);

  return (
    <AppProvider>
      <MenuProvider style={Styles.fullScreen}>
        <NavigationContainer ref={RootNavigation.navigationRef}>
          <Stack.Navigator initialRouteName={Routes.SignIn}>
            <Stack.Screen name={Routes.SignIn} component={LogIn} options={NavigationOptions.normalOptions} />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </AppProvider>
  );
}