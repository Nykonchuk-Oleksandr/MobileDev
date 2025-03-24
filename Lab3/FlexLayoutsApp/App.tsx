import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import RowLayoutScreen from "./components/RowLayoutScreen";
import ColumnLayoutScreen from "./components/ColumnLayoutScreen";
import GridLayoutScreen from "./components/GridLayoutScreen";

// Головний компонент застосунку
export default function App() {
  const [layout, setLayout] = useState<"row" | "column" | "grid">("row");

  return (
    <View style={styles.container}>
      {/* Відображення вибраного компонента */}
      {layout === "row" && <RowLayoutScreen />}
      {layout === "column" && <ColumnLayoutScreen />}
      {layout === "grid" && <GridLayoutScreen />}

      {/* Кнопки для перемикання макетів */}
      <View style={styles.buttonContainer}>
        <Button title="Row Layout" onPress={() => setLayout("row")} />
        <Button title="Column Layout" onPress={() => setLayout("column")} />
        <Button title="Grid Layout" onPress={() => setLayout("grid")} />
      </View>
    </View>
  );
}

// Стилі
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
