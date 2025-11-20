import {
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native"
import { useEffect, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { Link } from "expo-router"
export default function Producto() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const { id } = useLocalSearchParams()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
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
    <>
      <ScrollView>
        <View className="flex-1 py-3 pl-2 bg-black">
          <View>
            <Link href="/" asChild>
              <Text className="px-3 py-2 text-white">Volver</Text>
            </Link>
          </View>
        </View>
        <View className="p-4 flex-1 flex-col items-center justify-center">
          <View className="p-12">
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: data.image }}
            />
          </View>

          <Text className="text-3xl ml-5">{data.title}</Text>

          <View className="flex-row px-4 py-6 justify-around items-start">
            <View className="bg-black rounded-full items-center justify-center">
              <Text className="mx-5  text-white font-bold text-lg">
                ${data.price}
              </Text>
            </View>

            <View className="items-center justify-center">
              <Text className="mx-5  font-bold text-xl">{data.category}</Text>
            </View>
          </View>
          <View className="flex-1  items-end w-[90%] ">
            <Link
              href="https://wa.me/2223679848?text=Hola%2C%20quiero%20comprar%20estoooooooo"
              asChild
            >
              <Pressable className="p-1 bg-yellow-200 mt-2 ">
                <Text>Comprar</Text>
              </Pressable>
            </Link>
          </View>
          <Text className="p-4 pt-12 text-lg">{data.description}</Text>
        </View>
      </ScrollView>
    </>
  )
}
