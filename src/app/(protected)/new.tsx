import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function NewPostScreen() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const onSubmit = async () => {
    if (!text || !user) return;
    const { data, error } = await supabase
      .from("posts")
      .insert({ content: text, user_id: user.id });

    if (error) {
      console.error(error);
    }
    setText("");
  };

  return (
    <SafeAreaView className="p-4 flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-white text-lg font-bold">username</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Whats on your mind?"
          placeholderTextColor="gray"
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
