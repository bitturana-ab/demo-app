import { Text, View } from "react-native";
import { Link } from "react-native";
export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ab page</Text>
      {/* <Link href="/">Go to home</Link> */}
    </View>
  );
}
