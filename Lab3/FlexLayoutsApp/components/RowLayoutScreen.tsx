import React from "react";
import { View, StyleSheet } from "react-native";

// Екран із рядковим розташуванням (flexDirection: "row")
const RowLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
    </View>
  );
};

// Стилі для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
  },
});

export default RowLayoutScreen;
