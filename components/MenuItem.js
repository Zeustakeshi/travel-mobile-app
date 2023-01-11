import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const MenuItem = ({
    title = "",
    imgSrc,
    isActive = false,
    onClick = () => {},
}) => {
    return (
        <TouchableOpacity
            onPress={() => onClick(title)}
            className="justify-center items-center"
        >
            <View className="w-24 h-24 justify-center items-center mb-2">
                <Image className="w-full h-full object-cover" source={imgSrc} />
            </View>
            <Text
                className="font-semibold text-sm "
                style={isActive ? styles.textactive : styles.text}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textactive: {
        color: "#4DABB7",
    },
    text: {
        color: "#666",
    },
});

export default MenuItem;
