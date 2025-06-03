import { Post } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Image, Pressable, Text, View } from "react-native";
dayjs.extend(relativeTime);
export default function PostLitstItem({ post }: { post: Post }) {
  return (
    <View className="flex-row p-4 border-b border-gray-800">
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-gray-500">@{post.user.username}</Text>

          <Text className="text-white font-bold mr-2">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>
        <Text className="text-white mt-2 mb-3">{post.content}</Text>
        <View className="flex-row gap-4 mt-2">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="gray" />
            <Text className="text-gray-500 ml-2">{post.replies.length}</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="gray" />
            <Text className="text-gray-500 ml-2">{post.replies.length}</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="gray" />
            <Text className="text-gray-500 ml-2">{post.replies.length}</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={20} color="gray" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
