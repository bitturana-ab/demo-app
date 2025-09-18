import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, Appearance, useColorScheme, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // detect system mode
  const colorScheme = useColorScheme();
  if (colorScheme == "dark") {
    // do for dark mode
  } else {
    // do for light mode
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sanjay home page</Text>
      <Link href="/ab">
        <Button title="Go to ab" />
      </Link>
      <Image
        source={require("../assets/images/icon.png")}
        style={{ width: 250, height: 250 }}
      />

      <Link href="/users/ab">user 1</Link>
      <Link href="/users/yourname">user you</Link>
    </SafeAreaView>
  );
}
