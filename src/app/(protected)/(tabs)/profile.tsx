import { supabase } from "@/lib/supabase";
import { Text } from "react-native";
export default function ProfileScreen() {
  return (
    <Text
      onPress={() => {
        supabase.auth.signOut();
      }}
      className="text-white"
    >
      Signout
    </Text>
  );
}
