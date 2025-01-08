import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import MealDetails from "../MealDetails";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  console.log(duration);
  console.log(complexity);
  console.log(affordability);

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          complexity={complexity}
          affordability={affordability}
          duration={duration}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "rubik-variable",
    fontSize: 18,
  },
});
