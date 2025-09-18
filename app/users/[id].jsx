import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function () {
  const { id } = useLocalSearchParams();
  return (
    <View>
      {" "}
      <Text>your name : {id}</Text>
    </View>
  );
}
