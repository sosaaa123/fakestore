import { useEffect, useState } from "react"
import {
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native"
import { Link } from "expo-router"
export default function Main() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoad(false)
      })
  }, [])

  if (load) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
  return (
    <View className="flex-1 px-4 pt-6 bg-white">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Link href={`/${item.id}`} asChild>
            <Pressable className="w-[48%] mb-4 mx-[1%]">
              <View className="p-4 items-center ">
                <View className="pb-4 ">
                  <Image
                    style={{ width: 120, height: 120 }}
                    source={{ uri: item.image }}
                  />
                </View>
                <Text
                  className="text-gray-600 font-weight text-align text-base mb-2 "
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text className=" text-black-900">${item.price}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  )
}
