import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen name="Home" component={HomeScreen} />
        <TopTab.Screen name="Settings" component={SettingsScreen} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}
