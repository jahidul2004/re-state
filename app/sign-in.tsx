import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";

const SignIn = () => {
    const handleLogin = async () => {
        const result = await login();

        if(result){
          console.log("Logged in successfully");
        }else{
          Alert.alert("Error","Failed to login");
        }
    };
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image
                    source={images.onboarding}
                    className="w-full h-4/6"
                    resizeMode="contain"
                />

                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome to ReState
                    </Text>
                    <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-2">
                        Let's Get You Closer To {"\n"}
                        <Text className="text-primary-300">
                            Your Ideal Home
                        </Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to Restate With Google
                    </Text>

                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-white shadow-zinc-300 shadow-md py-4 mt-5 rounded-full"
                    >
                        <View className="flex flex-row items-center justify-center gap-2">
                            <Image
                                resizeMode="contain"
                                className="w-5 h-5"
                                source={icons.google}
                            />
                            <Text className="font-rubik-bold">
                                Continue With Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
