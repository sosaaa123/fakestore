import { Slot } from "expo-router"
import { View, Text, ImageBackground, Image } from "react-native"
import "../global.css"
export default function RootLayout() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/bdd.jpg")}
        className="h-40 rounded-xl  items-center justify-center"
        resizeMode="cover"
      >
        <Text className="text-white text-4xl text-center ">
          La Fakessssstore
        </Text>
      </ImageBackground>
      <View className="flex-1">
        <Slot />
      </View>
      <ImageBackground
        source={require("../assets/images/descarga.jpg")}
        className="h-31 rounded-xl  items-center justify-center border-b-6 border-black"
        resizeMode="cover"
      >
        <View className="py-4 flex-row items-center justify-center gap-5">
          <Text className="text-white text-center text-base">
            @Failed Store 2025
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}
