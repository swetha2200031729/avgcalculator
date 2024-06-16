import { useState } from "react";
import Card from "./Card";

// CalAvg.js

export function CalAvg(inputValue) {
  const numbers = inputValue.split(',').map(num => parseFloat(num.trim()));

  if (numbers.length <= 1) {
      throw new Error('Please enter at least two numbers separated by commas.');
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / (numbers.length - 1); // Exclude count of elements

  return avg.toFixed(2);
}
