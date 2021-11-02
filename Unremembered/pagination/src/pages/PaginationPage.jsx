import React from 'react';
import { PaginationSection } from "../components";

export const PaginationPage = ({location, history}) => {

  return (
    <div>
      <PaginationSection location={location} history={history} />
    </div>
  )
};
