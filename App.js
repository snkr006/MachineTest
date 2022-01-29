import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './app/routes/Tab';
import Product from './app/components/Home/Products/Product';
import Details from './app/components/Home/Details/Details';

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
