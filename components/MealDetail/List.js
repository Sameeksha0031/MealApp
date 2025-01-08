import { Text, View, StyleSheet } from "react-native";
import React from "react";

function List({ data }) {
  return data.map((dataPoints) => (
    <View key={dataPoints} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoints}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
