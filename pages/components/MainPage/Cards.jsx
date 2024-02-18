import React from 'react';
import Card from './Card';
import CardData from './CardData';

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-14 xxl:gap-20 my-5 lg:my-12 w-fit'>
         {CardData.map((deck) => (
      <Card key={deck.id} id={deck.id} last={deck.last} date={deck.date} graph={deck.graph} title={deck.title} des={deck.des} />
    ))}
    </div>
  )
}

export default Cards