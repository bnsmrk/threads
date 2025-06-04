import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center px-6 bg-black">
      <Text className="text-3xl font-bold text-white mb-8 text-center">
        Create an Account
      </Text>
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
      <TouchableOpacity className="bg-blue-600 rounded-lg py-3 mb-6">
        <Text className="text-white text-center font-semibold text-lg">
          Login
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center">
        <Text className="text-gray-400">Already have an account? </Text>
        <Link href="/login" className="text-blue-400 font-semibold">
          Login
        </Link>
      </View>
    </View>
  );
}
