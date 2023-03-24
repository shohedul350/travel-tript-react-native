import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 shadow-md bg-white w-[152px] my2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      <Text className="text-[#428288] text-[18px] font-bold p-1">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <View className="flex-row items-center space-x-1 p-1">
        <FontAwesome name="map-marker" size={20} color="#89597A2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 8 ? `${location.slice(0, 8)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
