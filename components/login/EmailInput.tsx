import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type Props = {
  login: string;
  handleLogin: (text: string) => void;
};

const EmailInput = ({ login, handleLogin }: Props) => {
  return (
    <View>
      <Text style={styles.inputTitle}>Email / Телефон</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor={"gray"}
        value={login}
        onChangeText={handleLogin}
      />
    </View>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  inputTitle: {
    marginBottom: 5,
    color: "#ffffff",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    color: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
