import React from 'react';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../../utils/queries';

function CategoryBar({ setCategory }) {
  const { data: categoryData } = useQuery(CATEGORIES);
  const categories = categoryData?.categories || [];

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            setCategory(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;