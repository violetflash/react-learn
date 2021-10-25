import React, { useState } from 'react';
import { useFetch } from '../data/useFetch';

export const Table = () => {
  // const [data, setData] = useState(null);
  const data = useFetch();
  if (!data) return null;
  console.log(data);

  return (
    <div>

    </div>
  )

};
