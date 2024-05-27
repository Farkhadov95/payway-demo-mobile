import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Text style={styles.navLang}>ENG</Text>
      </TouchableOpacity>
      <View style={styles.navLinkContainer}>
        <TouchableOpacity>
          <Text style={styles.navEnter}>ВХОД</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>РЕГИСТРАЦИЯ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 40,
  },
  navLang: {
    color: "#ffffff",
  },
  navEnter: {
    color: "#ffffff",
  },
  navLink: {
    color: "#4CB8E9",
  },
  navLinkContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
