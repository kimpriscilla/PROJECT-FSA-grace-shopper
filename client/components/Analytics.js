import React from 'react';
import { getBreedSales } from '../store/analytics/analytics';
import { useSelector } from "react-redux";

export default function Analytics() {
  const sales = useSelector((state) => state.analytics);
  console.log(sales)
  return (
    <div>
      Analytics
    </div>
  );
};
