import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
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
const createPost = async (content: string, user_id: string) => {
  const { data, error } = await supabase
    .from("posts")
    .insert({ content, user_id })
    .select("*")
    .throwOnError();
  return data;
};

export default function NewPostScreen() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const queryCLient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => createPost(text, user!.id),
    onSuccess: () => {
      setText("");
      router.back();
      queryCLient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
    >
      <SafeAreaView className="flex-1 p-4">
        <View className="flex-1 justify-between">
          <View>
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
          </View>
          <Pressable
            onPress={() => mutate()}
            className="bg-white p-3 px-6 self-end rounded-full mb-2"
            disabled={isPending}
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
