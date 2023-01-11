import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { heroImg } from "../assets";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="relative flex-1  pt-8 bg-white">
            {/* First section */}
            <View className="flex-row px-4 mt-8 items-center gap-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#4DABB7] text-2xl font-semibold">
                        Go
                    </Text>
                </View>
                <Text className="text-[#2A2B4B] text-2xl font-semibold">
                    Travel
                </Text>
            </View>
            {/* Second section */}
            <View className="gap-4 mt-3 px-4">
                <Text className="text-4xl text-[#2A2B4B]">
                    Enjoy the trip with
                </Text>
                <Text className="text-3xl text-[#4DABB7] font-semibold">
                    Good Moments
                </Text>
                <Text className="text-[#2A2B4B] font-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Labore, mollitia.
                </Text>
            </View>
            {/* Circle section */}
            <View className="bottom-24 -right-56 absolute w-[400px] h-[400px] rounded-full bg-[#4DABB7]"></View>
            <View className="-bottom-24 -left-44 absolute w-[400px] h-[400px] rounded-full bg-[#E99256]"></View>

            {/* Image container */}
            <View className="flex-1 items-center justify-center relative">
                <Animatable.Image
                    animation="fadeIn"
                    easing="linear"
                    className="object-cover w-full h-full absolute bottom-0"
                    source={heroImg}
                />
                {/* Go button */}
                <View className="flex-1 bottom-28 absolute w-24 h-24  border-t-[5px] border-r-[3px] border-l-[3px] border-[#5bc6d5]  rounded-full justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Discover")}
                    >
                        <Animatable.View
                            animation="pulse"
                            easing="ease-out"
                            iterationCount="infinite"
                            className="w-20 h-20 bg-[#5bc6d5] rounded-full justify-center items-center"
                        >
                            <Text className="text-gray-50 font-semibold text-[25px]">
                                GO
                            </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
