import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.logo}>BYKEA</Text>
        <MaterialIcons name="local-phone" size={24} color="black" />
      </View>
      <View style={styles.banner}>
        <View>
          <Image
            style={styles.bannerImg}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s",
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.moreoptions}>
        <View style={styles.messege}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="black" />
        </View>
        <View style={styles.balance}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text>Rs 0.00</Text>
        </View>
      </View>
      <View style={styles.CardContainer}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
        </View>


        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.card}
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D5622AQFPpbMGHpTYIw/feedshare-shrink_800/feedshare-shrink_800/0/1700142768236?e=1735171200&v=beta&t=1Cnbhqon8fjHPzmoS2E_fmDIOjlVA5RUxMdIMDb0_ks",
              }}
            ></Image>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    // backgroundColor: "red",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
  },
  banner: {
    backgroundColor: "#DEE3E8",
    height: SCREEN_HEIGHT / 3.5,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bannerImg: {
    height: "86%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  moreoptions: {
    height: 60,
    borderRadius: 13,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -30,
    marginHorizontal: 16,
    backgroundColor: "white",
  },
  balance: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    // borderLeftWidth: 0.5,
  },
  messege: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  CardContainer: {
    flex: 1,
    padding: 20,
    gap: 18,
  },
  cardRow: {
    flex: 1,
    flexDirection: "row",
    gap: 18,
  },
  card: {
    flex: 1,
    borderRadius: 10,
  },
});
