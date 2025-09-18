import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

export default function search() {
  return (
    <>
      <Stack.Screen
        // name="index"
        // options={{
        //   title: "Search",
        //   headerSearchBarOptions: {
        //     placement: "automatic",
        //     placeholder: "Search",
        //     onChangeText: () => {},
        //   },
        // }}
      />
      <ScrollView>Screen content</ScrollView>
    </>
  );
}
