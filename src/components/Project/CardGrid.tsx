// CardGrid.js
import React, { useState, useEffect } from 'react';


import Card from "./Card"; // Update the import path to where your Card.tsx is located
import CardProps from "@/types/CardProps";

export interface CardGridProps {
  data: CardProps[];
}
type ColumnsType = {
  [key: number]: JSX.Element[];
};




export interface CardGridProps {
  data: CardProps[];
}

export const CardGrid = ({ data }: CardGridProps) => {
  // Type for the state that holds the columns
  type ColumnsType = { [key: number]: JSX.Element[] };

  // State to hold the columns of cards
  const [columns, setColumns] = useState<ColumnsType>({});

  useEffect(() => {
    // Object to keep track of the cumulative height of each column
    type ColumnHeightsType = { [key: number]: number };
    const columnHeights: ColumnHeightsType = { 1: 0, 2: 0, 3: 0 };

    // Object to temporarily store the new columns
    const newColumns: ColumnsType = { 1: [], 2: [], 3: [] };

    data.forEach((item, index) => {
      // Simulate the height calculation of a card
      const cardHeight: number = 100; // Replace with actual card height calculation

      // Determine the column with the minimum cumulative height
      const minColumn: string = Object.keys(columnHeights).reduce((min, key) =>
        columnHeights[parseInt(key)] < columnHeights[parseInt(min)] ? key : min
      );

      // Add the card to the column with the minimum cumulative height
      newColumns[parseInt(minColumn)].push(
        <div key={index} className="mb-10">
        <Card
          key={index}
          title={item.title}
          year={item.year}
          description={item.description}
          pageLink={item.pageLink}
          liveLink={item.liveLink}
          githubLink={item.githubLink}
          imagePath={item.imagePath}
        />
        </div>
      );

      // Update the cumulative height of the chosen column
      columnHeights[parseInt(minColumn)] += cardHeight;
    });

    // Update the state with the new columns
    setColumns(newColumns);
  }, [data]);

  return (
    <div className="flex flex-wrap -mx-2">
      {Object.values(columns).map((column, index) => (
        <div key={index} className="masonry-column px-6 w-full md:w-1/3">
          {column}
        </div>
      ))}
    </div>
  );
};
