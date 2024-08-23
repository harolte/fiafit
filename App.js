import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DashboardScreen } from './micro-frontends/dashboard';
import LoginScreen from './micro-frontends/login/components/LoginScreen';
import  ResetPasswordScreen  from './micro-frontends/reset-password/components/ResetPasswordScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './micro-frontends/Componentes/Footer';
//import Register from './micro-frontends/register';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false }} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false }} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});