import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScren"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AcessoScreen from "./src/screens/AcessScreen";     

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Acess" component={AcessoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


