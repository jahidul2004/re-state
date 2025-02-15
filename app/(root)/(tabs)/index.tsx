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
            <Text className="font-bold my-10 text-3xl border p-2 text-red-500 rounded">
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
        </View>
    );
}
