import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, Text } from "react-native";
import PostListItem from "../../../components/PostListItem";

export default function HomeScreen() {
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*, user:profiles(*)")
      .throwOnError();
    return data;
  };
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error loading posts: {error.message}</Text>;
  }
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => (
        <Link href="/new" className="text-blue-500 p-4 text-center text-3xl">
          New Post
        </Link>
      )}
    />
  );
}
