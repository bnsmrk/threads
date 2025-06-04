import { supabase } from "@/lib/supabase";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <View className="flex-1 justify-center px-6 bg-black">
      <Text className="text-3xl font-bold text-white mb-8 text-center">
        Login
      </Text>
      {error && <Text className="text-red-400 text-center mb-4">{error}</Text>}
      <TextInput
        className="bg-gray-800 text-white rounded-lg px-4 py-3 mb-4"
        placeholder="Email"
        placeholderTextColor="#a1a1aa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="bg-gray-800 text-white rounded-lg px-4 py-3 mb-6"
        placeholder="Password"
        placeholderTextColor="#a1a1aa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-blue-600 rounded-lg py-3 mb-6"
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white text-center font-semibold text-lg">
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center">
        <Text className="text-gray-400">Dont have an account? </Text>
        <Link href="/signup" className="text-blue-400 font-semibold">
          Create one
        </Link>
      </View>
    </View>
  );
}
