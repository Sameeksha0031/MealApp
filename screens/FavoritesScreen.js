import { StyleSheet, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummyData";
import { useContext } from "react";
import { View } from "react-native";

function FavoritesScreen({ navigation }) {
  const favoritesMealsCtx = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );
  return (
    <View style={styles.rootContainer}>
      {favoritesMeals.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites yet</Text>
      ) : (
        <MealsList items={favoritesMeals} navigation={navigation} />
      )}
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3f2f25",
    flex: 1,
    justifyContent: "center", // Centering vertically
    alignItems: "center", // Centering horizontally
  },
  noFavoritesText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
