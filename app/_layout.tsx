import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

// export default function RootLayout() {
//   return (
//     <>
//       {" "}
//       <StatusBar style="light" />
//       <Stack />
//     </>
//   );
// }
export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="account">
        <Icon sf="gear" drawable="custom_account_drawable" />
        <Label>Account</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
