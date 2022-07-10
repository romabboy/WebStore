import React from 'react';
import Banner from './Banner';
import CardsArea from './CardsArea';


export default function SalesHits() {
  return (
    <div className="salesHits">
      <div className="salesHits__container container">
        <Banner />
        <CardsArea />
      </div>
    </div>
  )
}
