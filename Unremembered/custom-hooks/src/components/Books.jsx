import React from 'react';

export const Books = ({ items = [], addToOrder }) => {

  return (
    <div className='books'>
      {
        items.map((book) => (
          <Book key={book.id} {...book} addToOrder={addToOrder}/>
        ))
      }
    </div>
  )
};

const Book = ({ id, title, price, addToOrder }) => {

  return (
    <div className='book'>
      <h2>{title}</h2>
      <span>{price}</span>
      <button onClick={() => addToOrder(id)}>Buy</button>
    </div>
  )
}