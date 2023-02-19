import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMeals = async () => {
    try {
      setIsLoading(true);
      const response = await fetchApi("foods");

      setMeals(response.data);

      setIsLoading(false);
    } catch (error) {
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>Loading</p>}
      <ul>
        {meals.map((item) => (
          <MealItem key={item._id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default memo(Meals);

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`;
