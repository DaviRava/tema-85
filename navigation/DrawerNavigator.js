import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/feed";
import CreatePost from "../screens/createPost";
import Profile from "../screens/profile";
import BottomTab from "./tabNavigator";
import StackNavigator from "./StackNavigator";

const Draw = createDrawerNavigator();

export default class Drawer extends Component {
  render() {
    return (
      <Draw.Navigator>
        <Draw.Screen name="Stack" component={StackNavigator} />
        <Draw.Screen name="Profile" component={Profile} />
      </Draw.Navigator>
    );
  }
}
