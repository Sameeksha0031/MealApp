import { View, StyleSheet, Text } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.textFormat, textStyle]}>{duration}m</Text>
      <Text style={[styles.textFormat, textStyle]}>{complexity}</Text>
      <Text style={[styles.textFormat, textStyle]}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  textFormat: {
    textTransform: "uppercase",
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
