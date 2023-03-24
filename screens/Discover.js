import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import {Avatar, Hotels, Restaurants, Attractions}  from '../assets/index'
import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/ItemCardContainer';

const Discover = () => {
const [ type, setType] = useState("")
  const navigation = useNavigation()
  useLayoutEffect(()=>{
 navigation.setOptions({
   headerShown: false
 })
  },[])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
     <View className="flex-row items-center justify-between px-8 pt-8">
      <View>
        <Text className="text-[36px] text-[#0B64]">Discover</Text>
        <Text className="text-[30px] text-[#527283]">The beauty today</Text>
      </View>
      <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
        <Image
          source={Avatar} 
          className="w-full h-full object-cover rounded-md"
        />
      </View>

      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 shadow-lg mt-4">
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />

</View>
{/* Menu container */}
<ScrollView>
  <View className="flex-row items-center justify-between px-8 mt-8">
      <MenuContainer 
      key={"hole"} 
      title="Hotels" 
      imageSrc={Hotels}
      type={type}
      setType={setType}
      />

      <MenuContainer 
      key={"attractions"} 
      title="Attractions" 
      imageSrc={Attractions}
      type={type}
      setType={setType}
      />

  
      <MenuContainer 
      key={"restaurants"} 
      title="Restaurants" 
      imageSrc={Restaurants}
      type={type}
      setType={setType}
      />
  </View>

  <View>
       <View className="flex-row items-center justify-between px-4 mt-8">
        <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
        <TouchableOpacity  className="flex-row justify-center items-center space-x-2">
          <Text className="text-[#A0C4C7] text-[28px] font-bold">Explore</Text>
          <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
        </TouchableOpacity>
       </View>

       <View className="px-4 mt-8 flex-row justify-evenly flex-wrap ">
        <ItemCardContainer key={"100"} imageSrc={"https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381__340.jpg"} title="Something" location="Dhaka"/>
        <ItemCardContainer key={"102"} imageSrc={"https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381__340.jpg"} title="Something" location="Rangpur"/>
       </View>

  </View>

</ScrollView>


   </SafeAreaView>
  )
}

export default Discover