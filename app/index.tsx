import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sanjay home page</Text>
      <Link href="/ab">Visit AB</Link>
      <Link href="/users/ab">user 1</Link>
      <Link href="/users/yourname">user you</Link>
    </SafeAreaView>
  );
}
