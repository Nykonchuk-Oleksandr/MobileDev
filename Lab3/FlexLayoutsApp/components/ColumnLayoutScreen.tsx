import React from "react";
import { View, StyleSheet } from "react-native";

// Екран із колонковим розташуванням (flexDirection: "column")
const ColumnLayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "orange" }]} />
      <View style={[styles.box, { backgroundColor: "purple" }]} />
      <View style={[styles.box, { backgroundColor: "cyan" }]} />
    </View>
  );
};

// Стилі
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
  },
});

export default ColumnLayoutScreen;
