import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CardItem = ({
    src = "",
    title = "Unknow",
    location = "Unknow",
    data = {},
}) => {
    const navigation = useNavigation();

    const handlegoDetailScreen = () => {
        navigation.navigate("Detail", {
            param: data,
        });
    };

    return (
        <TouchableOpacity
            onPress={handlegoDetailScreen}
            style={styles.shadow}
            className="w-full  mt-2 rounded-lg p-2 bg-white justify-center items-center"
        >
            <View className="w-full h-48">
                <Image
                    source={{ uri: src }}
                    className="w-full h-full object-cover rounded-lg"
                />
            </View>
            <View className="w-full justify-center items-center">
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-[#428288] text-xl font-semibold p-1 "
                >
                    {title}
                </Text>

                <View className="w-full flex-row gap-1 justify-start items-center">
                    <Entypo name="location-pin" size={20} color="#8597A2" />
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        className="text-base w-full flex-1"
                    >
                        {location}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2,

        elevation: 3,
    },
});

export default CardItem;
