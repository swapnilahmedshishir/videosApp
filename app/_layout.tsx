import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import "./global.css";

export default function Layout() {
  return (
    <View className=" bg-black pt-11 mt-64 ">
      <Text className="text-white flex justify-center items-center">
        Home Page
      </Text>
      <Tabs />
    </View>
  );
}
