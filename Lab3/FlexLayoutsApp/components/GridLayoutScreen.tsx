import React from "react";
import { View, StyleSheet } from "react-native";

// Екран із сітковим розташуванням (flexWrap: "wrap")
const GridLayoutScreen = () => {
  return (
    <View style={styles.container}>
      {[...Array(8)].map((_, index) => (
        <View key={index} style={[styles.box, { backgroundColor: getRandomColor() }]} />
      ))}
    </View>
  );
};

// Функція для генерації випадкового кольору
const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "cyan", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Стилі
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default GridLayoutScreen;
