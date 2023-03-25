import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Hotels, Restaurants, Attractions, NotFound} from "../assets/index";
import MenuContainer from "../components/MenuContainer";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from '../api/index'

const Discover = () => {
  const [type, setType] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  useEffect(()=>{
    setLoading(true)
    getPlacesData().then(data=>{
      setMainData(data)
      setInterval(() => {
        setLoading(false)
      }, 2000);
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
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "YOUR API KEY",
            language: "en",
          }}
        />
      </View>
   {/* Menu container */}
 

      {
        isLoading ? <View className="flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#0B646B" />

        </View>  : 

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
            <Text className="text-[#2C7379] text-[28px] font-bold">
              Top Tips
            </Text>
            <TouchableOpacity className="flex-row justify-center items-center space-x-2">
              <Text className="text-[#A0C4C7] text-[28px] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt-8 flex-row justify-evenly flex-wrap ">

            {
              mainData.length > 0 ? <>

              {
                mainData?.map((data, index)=>(
                  <ItemCardContainer
                  key={index}
                  imageSrc={
                 data?.photo?.images?.medium?.url ? 
                 data?.photo?.images?.medium?.url
                 :
                 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                  }
                  title={data?.name}
                  location={data?.location_string}
                  data={data}
                />
                ))
              }
              
          
  
            
            </> : <>
            <View className="w-full h-[350px] items-center space-y-8 justify-center">
              <Image  source={NotFound} className="w-32 h-32 object-cover"/>
              <Text>Opps...No Data Found</Text>
            </View>
            </>
            }
           
          </View>
        </View>
      </ScrollView>
      }
   
    </SafeAreaView>
  );
};

export default Discover;
