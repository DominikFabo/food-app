import React from "react";
import classes from "./MealsList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
  const mealsListItems = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.list}>
      <Card>
        <ul>{mealsListItems}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
