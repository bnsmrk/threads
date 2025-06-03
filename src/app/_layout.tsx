import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import "../../global.css";
export default function RootLayout() {
  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      card: "#101010",
      background: "#101010",
    },
  };
  return (
    <ThemeProvider value={myTheme}>
      <Slot />
    </ThemeProvider>
  );
}
