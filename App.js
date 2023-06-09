import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import Discover from './screens/Discover'
import ItemDetailsScreen from './screens/ItemDetailsScreen'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

