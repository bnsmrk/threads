import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function NewPostScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="p-4 flex-1">
      <Text className="text-white text-lg font-bold">username</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Whats on your mind?"
        className="text-white text-lg"
        multiline
        numberOfLines={4}
      />

      <View className="mt-auto">
        <Pressable
          onPress={() => console.log("post: ", text)}
          className="bg-white p-3 px-6 self-end rounded-full"
        >
          <Text className="text-black font-bold">Post</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
