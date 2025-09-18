import { Text, View } from "react-native";
// import { Link } from "react-native";
import { Stack, Link } from "expo-router";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          // headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Text>ab page</Text>

      <Link href="/">Go to home</Link>
    </View>
  );
}
