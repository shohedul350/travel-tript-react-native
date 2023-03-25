import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ItemDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data?.phone, data?.email , data?.address);
  
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5 name="heartbeat" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12] font-bold text-gray-100">
                {data?.price_level}
              </Text>
              <Text className="text-[12] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>

            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-1 mt-2">
            <FontAwesome name="map-marker" size={20} color="#8C9EAE" />
            <Text className="text-[#8C9EAE] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={20} color="#D58574" />
              </View>

              <View>
                <Text className="text-[#515151]"> {data?.rating}</Text>
                <Text className="text-[#515151]"> Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={22} color="#D58574" />
              </View>

              <View>
                <Text className="text-[#515151]"> {data?.price_level}</Text>
                <Text className="text-[#515151]"> Price level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={22} color="#D58574" />
              </View>

              <View>
                <Text className="text-[#515151]"> {data?.bearing}</Text>
                <Text className="text-[#515151]"> bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine?.map((n, index) => (
              <TouchableOpacity
                key={index}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">

     
          {data?.phone && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text>{data?.phone}</Text>
            </View>
          )}

          {data?.email !==  'undefined' && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text>{data?.email || 'N/A'}</Text>
            </View>
          )}

          {data?.address && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text>{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-2xl font-semibold uppercase tracking-wide text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
