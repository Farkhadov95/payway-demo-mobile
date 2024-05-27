import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/svg/logo.svg";

const Login = () => {
  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Text style={styles.text}>Login Screen</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41586C",
  },
  text: {
    color: "#ffffff",
  },
});
