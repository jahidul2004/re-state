import { Link } from "expo-router";
import { Alert, Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="w-[80%] text-center font-bold my-10 text-3xl border p-2 text-red-500 rounded">
                {" "}
                Welcome
            </Text>
            <Link
                className="bg-green-200 px-4 py-2 text-xl font-bold rounded my-2"
                href={"/sign-in"}
            >
                Sign In
            </Link>
            <Link
                className="bg-red-200 px-4 py-2 text-xl font-bold rounded my-2"
                href={"/explore"}
            >
                Explore
            </Link>
            <Link
                className="bg-orange-200 px-4 py-2 text-xl font-bold rounded my-2"
                href={"/profile"}
            >
                Profile
            </Link>
            <Link
                className="bg-purple-200 px-4 py-2 text-xl font-bold rounded my-2"
                href={"/properties/1"}
            >
                Property
            </Link>

            <View className="p-4 my-2 w-[80%] rounded">
                <Text className="text-center">Hello</Text>
                <Text className="text-center">World</Text>
            </View>
        </View>
    );
}
