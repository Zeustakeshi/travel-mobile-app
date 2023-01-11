import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    AntDesign,
    Entypo,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Detail = ({ route }) => {
    const navigation = useNavigation();
    const data = route?.params?.param;
    return (
        <SafeAreaView className="relative flex-1 bg-white">
            <ScrollView className="p-4">
                <View
                    className="relative w-full h-64 shadow-2xl bg-white rounded-xl"
                    style={styles.shadow}
                >
                    <Image
                        className="w-full h-full object-cover rounded-xl"
                        source={{
                            uri:
                                data?.photo?.images?.original?.url ||
                                "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                        }}
                        style={styles.shadow}
                    />
                    <View className="absolute flex-1 w-full h-full rounded-xl justify-between">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Discover")}
                            className="m-4 w-10 h-10 bg-white  justify-center items-center rounded-xl"
                        >
                            <Ionicons
                                name="chevron-back"
                                size={30}
                                color="#06B2BE"
                            />
                        </TouchableOpacity>
                        <View className="justify-center items-start">
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                className="font-medium text-sm px-4 py-1 bg-blue-50  m-4 rounded-xl"
                            >
                                {data?.ranking || data?.distance_string}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="mt-4">
                    <View className="w-full justify-center items-center">
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            className="text-[#428288] text-xl font-semibold p-1  w-full"
                        >
                            {data.name || "Unknow"}
                        </Text>

                        <View className="flex-1 w-full flex-row gap-1 justify-start items-center">
                            <Entypo
                                name="location-pin"
                                size={20}
                                color="#8597A2"
                            />
                            <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                className="w-full  flex-1"
                            >
                                {data?.address || data?.location_string}
                            </Text>
                        </View>
                    </View>

                    <View className="mt-4 w-full flex-row justify-between items-center ">
                        {/* Ratting */}
                        <View className="flex-row gap-1 justify-center items-center">
                            <View className="items-center justify-center p-3 bg-blue-200 rounded-xl">
                                <AntDesign
                                    name="star"
                                    size={20}
                                    color="#3b82f6"
                                />
                            </View>
                            <View className="justify-center items-start">
                                <Text>{data?.rating || 0}</Text>
                                <Text>Rattings</Text>
                            </View>
                        </View>
                        {/* Price level */}
                        <View className="flex-row gap-1 justify-center items-center">
                            <View className="items-center justify-center p-3 bg-blue-200 rounded-xl">
                                <MaterialIcons
                                    name="attach-money"
                                    size={20}
                                    color="#3b82f6"
                                />
                            </View>
                            <View className="justify-center items-start">
                                <Text>$$ - $$$</Text>
                                <Text>Price Level </Text>
                            </View>
                        </View>
                        {/*bearing */}
                        <View className="flex-row gap-1 justify-center items-center">
                            <View className="items-center justify-center p-3 bg-blue-200 rounded-xl">
                                <MaterialCommunityIcons
                                    name="arrow-right-box"
                                    size={20}
                                    color="#3b82f6"
                                />
                            </View>
                            <View className="justify-center items-start">
                                <Text> {data?.distance_string || "??"} </Text>
                                <Text>Distance</Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-4">
                        <Text className="font-semibold text-xl text-sky-700 mb-2">
                            Description
                        </Text>
                        <Text className=" ">
                            {data?.description || data?.ranking}
                        </Text>
                        <View>
                            <Text className="font-medium m-1 text-lg">
                                Website:{" "}
                            </Text>
                            <Text>{data?.web_url || data?.write_review}</Text>
                        </View>
                    </View>

                    {data?.cuisine && (
                        <View className="mt-4 flex-row flex-wrap w-full">
                            {data?.cuisine.map((item, index) => {
                                return (
                                    <Text
                                        key={index}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                        className="m-1 font-medium text-sm px-4 py-1 bg-blue-50 rounded-xl"
                                    >
                                        {item.name}
                                    </Text>
                                );
                            })}
                        </View>
                    )}

                    <View className="mt-4 p-2 rounded-md bg-gray-100">
                        <View className="flex-row gap-2 py-2 px-1 justify-start items-center">
                            <FontAwesome
                                name="phone"
                                size={20}
                                color="#0e7490"
                            />
                            <Text className="font-semibold">
                                {data?.phone || "+84 123456789"}
                            </Text>
                        </View>
                        <View className="flex-row gap-2 py-2 px-1 justify-start items-center">
                            <MaterialCommunityIcons
                                name="email"
                                size={20}
                                color="#0e7490"
                            />
                            <Text className="font-semibold">
                                {data?.email || "abc@gmail.com"}
                            </Text>
                        </View>
                        <View className=" flex-row gap-2 py-2 px-1 justify-start items-center">
                            <FontAwesome5
                                name="map-pin"
                                size={20}
                                color="#0e7490"
                            />
                            <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                className="font-semibold flex-1"
                            >
                                {data?.address ||
                                    data?.location_string ||
                                    "unknow"}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity className=" mt-4 mb-20 bg-blue-500 rounded-md py-4 justify-center items-center">
                        <Text className="font-semibold text-white text-xl ">
                            BOOK NOW
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#eee",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.0,

        elevation: 24,
    },
});

export default Detail;
