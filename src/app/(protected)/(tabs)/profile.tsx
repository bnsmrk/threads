import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { Pressable, Text, View } from "react-native";

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <View className="items-center mb-8">
        <View className="w-24 h-24 rounded-full bg-gray-800 mb-4 overflow-hidden">
          {user?.avatar_url && (
            <View className="flex-1">
              <Text className="text-gray-400 text-center mt-10">Avatar</Text>
              {/* You can use Image if you want to show the avatar */}
              {/* <Image source={{ uri: user.avatar_url }} className="w-full h-full" /> */}
            </View>
          )}
        </View>
        <Text className="text-white text-2xl font-bold mb-1">
          {user?.username}
        </Text>
        <Text className="text-gray-400 mb-2">{user?.email}</Text>
      </View>
      <Pressable
        onPress={() => supabase.auth.signOut()}
        className="bg-red-600 px-8 py-3 rounded-full"
      >
        <Text className="text-white text-lg font-bold">Sign Out</Text>
      </Pressable>
    </View>
  );
}
