import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";

export type buttonProps = TouchableOpacityProps & {
  bgColor?: string;
  txtColor?: string;
  mx?: number;
  my?: number;
  text: string;
};

export const ThemedBtn = ({
  bgColor,
  txtColor,
  my = 0,
  mx = 0,
  text,
  style,
  ...rest
}: buttonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.BTNContainer,
        bgColor && { backgroundColor: bgColor },
        my != undefined ? { marginVertical: my } : undefined,
        mx != undefined ? { marginHorizontal: mx } : undefined,
        style,
      ]}
      {...rest}
    >
      <ThemedText
        darkColor={txtColor ? txtColor : "#fff"}
        lightColor={txtColor ? txtColor : "#000"}
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BTNContainer: {
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#9900ef",
    borderRadius: 7,
  },
});
