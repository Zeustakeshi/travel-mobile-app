import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { attractionsImg, avatarImg, hotelImg, restaurantsImg } from "../assets";
import MenuItem from "../components/MenuItem";
import { FontAwesome } from "@expo/vector-icons";
import CardItem from "../components/CardItem";
import { getPlaceData } from "../api";
// 10.980434, 106.674485
// 10.980434, 106.674485
// 10.980434, 106.674485

const unknowSrc =
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

const Discover = () => {
    const [currTag, setCurrTag] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            const data = await getPlaceData();
            setDatas(data);
            setIsLoading(false);
        };
        getData();
    }, []);

    const handleClickItem = (title) => {
        setCurrTag(title.toLowerCase());
    };

    return (
        <SafeAreaView className="pt-8 relative flex-1 bg-white">
            <View className=" px-4  flex-row w-full items-center justify-between">
                <View className="gap-2">
                    <Text className="text-3xl font-bold text-[#0B646B]">
                        Discover
                    </Text>
                    <Text className="text-3xl font-normal text-[#527283]">
                        The beauty today
                    </Text>
                </View>
                <View className="w-12 h-12 bg-blue-500 rounded-md justify-center items-center">
                    <Image
                        source={avatarImg}
                        className="w-full h-full object-cover rounded-md"
                    />
                </View>
            </View>
            {/* Search */}
            <View
                className="mx-4 bg-white rounded-md my-4  "
                style={styles.shadow}
            >
                <TextInput
                    placeholder="Search..."
                    className="px-4 py-3 flex-1 w-full"
                />
            </View>
            {/* Menu container */}
            {isLoading ? (
                <View className="flex-1 justify-center items-center">
                    <ActivityIndicator size="large" color="#5bc6d5" />
                </View>
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="mx-4 mb-4"
                >
                    <View className="flex-row justify-center items-center">
                        <MenuItem
                            imgSrc={hotelImg}
                            title="Hotels"
                            isActive={currTag === "hotels"}
                            onClick={handleClickItem}
                        />
                        <MenuItem
                            imgSrc={attractionsImg}
                            title="Attractions"
                            isActive={currTag === "attractions"}
                            onClick={handleClickItem}
                        />
                        <MenuItem
                            imgSrc={restaurantsImg}
                            title="Restaurants"
                            isActive={currTag === "restaurants"}
                            onClick={handleClickItem}
                        />
                    </View>
                    <View className="flex-row justify-between items-center my-5">
                        <Text className="font-bold text-2xl text-[#2C7379]">
                            Top Tips
                        </Text>
                        <TouchableOpacity className="flex-row gap-2 items-center justify-center">
                            <Text className="text-lg font-semibold text-[#A0C4C7]">
                                Explore
                            </Text>
                            <FontAwesome
                                name="long-arrow-right"
                                size={32}
                                color="#A0C4C7"
                            />
                        </TouchableOpacity>
                    </View>

                    <View className="items-center justify-evenly p-2 ">
                        {datas.length > 0 &&
                            datas?.map((data, index) => {
                                return (
                                    <CardItem
                                        data={data}
                                        key={index}
                                        src={
                                            data?.photo?.images?.original
                                                ?.url || unknowSrc
                                        }
                                        title={data?.name}
                                        location={
                                            data?.address ||
                                            data?.location_string
                                        }
                                    />
                                );
                            })}

                        {/* {new Array(10).fill(0).map((item, index) => {
                            return <CardItem key={index} src={unknowSrc} />;
                        })} */}
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#999",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
});

export default Discover;
