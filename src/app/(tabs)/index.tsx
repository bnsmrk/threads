import { dummyPosts } from "@/dummyData";
import { FlatList } from "react-native";
import PostListItem from "../../components/PostListItem";
export default function HomeScreen() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
