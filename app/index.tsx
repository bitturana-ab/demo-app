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
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={{ width: 400, height: 400 }}
      />

      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 300, height: 300 }}
      />

      <Link href="/users/ab">user 1</Link>
      <Link href="/users/yourname">user you</Link>
      <Link href="/modal">Open modal</Link>
    </SafeAreaView>
  );
}
