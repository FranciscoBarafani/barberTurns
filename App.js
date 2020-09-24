import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import Home from "./screens/Home.js";
import Turn from "./screens/Turn.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
        <Stack.Screen
          name="Turn"
          component={Turn}
          options={{ title: "Nuevo Turno" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: "#272727",
    borderBottomColor: "#3e2f5b",
  },
  headerTitleStyle: {
    color: "#ffffff",
  },
});
