import { Image, ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { hide } from "expo-splash-screen";
import React from "react";
import {
  Text,
  View,
  Appearance,
  useColorScheme,
  Button,
  TouchableHighlight,
} from "react-native";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
      <TouchableHighlight underlayColor="white">
        <Link href="/ab">
          <Button title="Go to ab" />
        </Link>
      </TouchableHighlight>

      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          rem similique dolores quos ab? Neque mollitia aperiam aut? A tempora
          minus maiores culpa ipsam laborum aut impedit itaque aperiam commodi?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          consectetur amet sint voluptatibus quod doloribus aliquid similique
          dolor perferendis error iure optio ut dignissimos mollitia, architecto
          eveniet iste quidem sapiente. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos necessitatibus, autem ipsa veniam quis
          modi hic mollitia ducimus maiores sequi, commodi vitae recusandae
          velit laudantium asperiores fugit voluptates magni aspernatur! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Quo ad incidunt ut
          dolorum animi veritatis debitis, atque sed enim, facere placeat a
          eaque, omnis officia? Autem, nihil officiis! Ducimus, consequatur?
        </Text>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={{ width: " 90%", height: " 80%" }}
        >
          <TouchableHighlight underlayColor="red" onLongPress={hide}>
            <Image
              source={require("../assets/images/icon.png")}
              style={{ width: 250, height: 250 }}
            />
          </TouchableHighlight>
          <Text>You can write here</Text>
          <Image
            source={{
              uri: "https://reactjs.org/logo-og.png",
              // cache: "only-if-cached",
            }}
            style={{ width: 300, height: 300 }}
          />
        </ImageBackground>
      </ScrollView>
      <TextInput placeholder="enter phone number" keyboardType="numeric" />
      <Link href="/users/ab">user 1</Link>
      <Link href="/users/yourname">user you</Link>
      <Link href="/modal">Open modal</Link>
    </SafeAreaView>
  );
}
