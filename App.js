import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/DrawerNavigator";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { createStackNavigator } from "@react-navigation/stack";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Drawer" component={Drawer} />
    </Stack.Navigator>
  );
};

export default function app() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
