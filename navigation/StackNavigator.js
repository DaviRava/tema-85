import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./tabNavigator";
import PostScreen from "../screens/postScreen";

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    );
  }
}
