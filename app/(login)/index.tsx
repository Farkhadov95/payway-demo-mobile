import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ScreenOrientation from "expo-screen-orientation";
import { md5 } from "js-md5";
import { loginUser } from "@/services/user";
import Navbar from "@/components/login/Navbar";
import Logo from "../../assets/svg/logo.svg";
import PasswordInput from "@/components/login/PasswordInput";
import EmailInput from "@/components/login/EmailInput";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const displayError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const onSubmit = (data: { login: string; password: string }) => {
    const encodedPassword = md5(data.password);
    const postData = new URLSearchParams();
    postData.append("login", data.login);
    postData.append("passHash", encodedPassword);

    loginUser(postData.toString())
      .then((res) => {
        res.data.success
          ? Alert.alert("Success!")
          : displayError(res.data.message);
      })
      .catch((err) => {
        displayError(err.message);
      });
  };

  const handleLoginChange = (text: string) => {
    setLogin(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (login && password) {
      onSubmit({ login, password });
    } else {
      displayError("Заполните все поля");
    }
  };

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.unlockAsync();
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }

    changeScreenOrientation();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Navbar />
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View style={styles.container}>
        <Logo width={150} height={170} />
        <View style={styles.inputContainer}>
          <EmailInput handleLogin={handleLoginChange} login={login} />
          <PasswordInput
            handlePassword={handlePasswordChange}
            password={password}
          />
          <TouchableOpacity>
            <Text style={styles.forgotLink}>Забыли пароль?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitBtnContainer}>
          <Button title="Войти" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#41586C",
  },
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#41586C",
    paddingVertical: 100,
  },
  errorContainer: {
    backgroundColor: "tomato",
    padding: 10,
    marginTop: 10,
  },
  errorText: {
    color: "#FFFFFF",
  },
  inputContainer: {
    marginTop: 20,
    gap: 15,
  },
  forgotLink: {
    color: "#4CB8E9",
    marginBottom: 20,
  },
  submitBtnContainer: {
    width: 300,
  },
});
