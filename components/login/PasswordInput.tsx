import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Show from "../../assets/svg/show.svg";
import Hide from "../../assets/svg/hide.svg";

type Props = {
  password: string;
  handlePassword: (text: string) => void;
};

const PasswordInput = ({ password, handlePassword }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.passwordContainer}>
      <Text style={styles.inputTitle}>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Ввелите пароль"
        placeholderTextColor={"gray"}
        value={password}
        onChangeText={handlePassword}
        secureTextEntry={!isVisible}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <Hide width={24} height={24} />
        ) : (
          <Show width={24} height={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    color: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputTitle: {
    marginBottom: 5,
    color: "#ffffff",
  },
  passwordContainer: {
    position: "relative",
    width: 300,
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    top: 35,
  },
});
