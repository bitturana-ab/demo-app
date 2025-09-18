import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  NativeTabs,
  Icon,
  Label,
  Badge,
} from "expo-router/unstable-native-tabs";

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
    <>
      <NativeTabs>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        {/* <NativeTabs.Trigger name="settings">
          <Label>Settings</Label>
          <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger> */}
        <NativeTabs.Trigger name="search" role="search">
          <Label>Search</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="account">
          <Icon sf="gear" drawable="custom_account_drawable" />
          <Badge>9+</Badge>
          <Label>Account</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
