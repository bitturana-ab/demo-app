import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      {" "}
      <Text>your name : {id}</Text>
    </SafeAreaView>
  );
}
