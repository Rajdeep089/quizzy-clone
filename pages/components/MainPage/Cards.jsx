import React from 'react';
import Card from './Card';
import { PiTrendUpBold } from "react-icons/pi";
// import CardData from './CardData';

const Cards = () => {

  const CardData = [
    {
        id: 1,
        last: "Last Practice Linear etc etc",
        date: "28/02/23",
        graph: <PiTrendUpBold/>,
        title: "Practice",
        des: "A description of the above parameter goes here."
    },
    {
        id: 2,
        last: "Last Practice Linear etc etc",
        date: "28/02/23",
        graph: <PiTrendUpBold/>,
        title: "Mock",
        des: "A description of the above parameter goes here."
    },
    {
        id: 3,
        last: "Last Practice Linear etc etc",
        date: "28/02/23",
        graph: <PiTrendUpBold/>,
        title: "Title Text here",
        des: "A description of the above parameter goes here."
    },
    {
        id: 4,
        last: "Last Practice Linear etc etc",
        date: "28/02/23",
        graph: <PiTrendUpBold/>,
        title: "Title Text here",
        des: "A description of the above parameter goes here."
    },
];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-14 xxl:gap-20 my-5 lg:my-12 w-fit'>
         {CardData.map((deck) => (
      <Card key={deck.id} id={deck.id} last={deck.last} date={deck.date} graph={deck.graph} title={deck.title} des={deck.des} />
    ))}
    </div>
  )
}

export default Cards