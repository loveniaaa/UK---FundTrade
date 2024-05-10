import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Splash, Discount, Favorite, Profile, History, HistoryCash, HistoryTF, HistoryCU, ContentPage} from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
      <Stack.Screen
        name="Discount"
        component={Discount}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false, 
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="HistoryCash"
        component={HistoryCash}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="HistoryTF"
        component={HistoryTF}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="HistoryCU"
        component={HistoryCU}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
      <Stack.Screen
        name="ContentPage"
        component={ContentPage}
        options={{
          headerShown: false,
          presentation: 'modal',
          animation: 'fade',
          animationTypeForReplace: 'push'
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
