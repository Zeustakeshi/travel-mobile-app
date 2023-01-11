import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Discover from "./screens/Discover";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Discover" component={Discover} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
                <StatusBar style="dark" />
            </TailwindProvider>
        </NavigationContainer>
    );
}
