import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverViewScreen({ route, navigation }) {
  const itemId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(itemId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === itemId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [itemId, navigation]);

  return <MealsList items={displayMeals} navigation={navigation} />;
}

export default MealsOverViewScreen;
