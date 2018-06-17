import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cards = robots.map((robot, i) => {
    return (
      <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
    )
  });
  return (
    <div>
      { cards }
    </div>
  )
}

export default CardList;
