import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Login from './screens/Login'
import Signup  from './screens/signup'
import splash  from './screens/Splash'
import Welcome  from './screens/welcome'
import Home  from './screens/Home'
import ProductInfo  from './screens/productInfo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="splash" options={{contentStyle: {backgroundColor: 'white'}, headerShown: false}} component={splash} /> */}
        {/* <Stack.Screen name="Login" options={{contentStyle: {backgroundColor: 'white'}, headerShown: false}} component={Login} /> */}
        {/* <Stack.Screen name="welcome" options={{contentStyle: {backgroundColor: 'white'}, headerShown: false}} component={Welcome}  /> */}
        {/* <Stack.Screen name="Signup" options={{contentStyle: {backgroundColor: 'white'}, headerShown: false}} component={Signup}  /> */}
        <Stack.Screen name="home" options={{contentStyle: {backgroundColor: 'white'}, headerShown: false}} component={Home}   />
        <Stack.Screen name="productInfo" options={{contentStyle: {backgroundColor: 'white'},  headerShown: false}} component={ProductInfo}   />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
