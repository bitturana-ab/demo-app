import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  NativeTabs,
  Icon,
  Label,
  Badge,
} from "expo-router/unstable-native-tabs";
import { Drawer } from "expo-router/drawer";

export function Model() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
export default function RootLayout() {
  return (
    <>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "User",
            title: "overview",
          }}
        />
      </Drawer>
    </>
  );
}
// export default function TabLayout() {
//   return (
//     <>
//       <NativeTabs>
//         <Stack>
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         </Stack>
//         {/* <NativeTabs.Trigger name="settings">
//           <Label>Settings</Label>
//           <Icon sf="house.fill" drawable="custom_android_drawable" />
//         </NativeTabs.Trigger> */}
//         <NativeTabs.Trigger name="search" role="search">
//           <Label>Search</Label>
//         </NativeTabs.Trigger>
//         <NativeTabs.Trigger name="index">
//           <Label>Home</Label>
//           <Icon sf="house.fill" drawable="custom_android_drawable" />
//         </NativeTabs.Trigger>
//         <NativeTabs.Trigger name="account">
//           <Icon sf="gear" drawable="custom_account_drawable" />
//           <Badge>9+</Badge>
//           <Label>Account</Label>
//         </NativeTabs.Trigger>
//       </NativeTabs>
//     </>
//   );
// }
