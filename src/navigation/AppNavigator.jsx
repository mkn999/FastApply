import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade',
        }}
        >
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//animation: 'slide_from_right'
// animation: 'slide_from_left'
// animation: 'slide_from_bottom'
// animation: 'fade'
// animation: 'simple_push'