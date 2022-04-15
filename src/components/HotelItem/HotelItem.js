import React from "react";

const HotelItem = ({ item }) => {
  return (
    <>
      <div>
        <h3>{item.hotelName}</h3>
        <p>Price: {item.priceFrom}</p>
        <p>{item.stars}</p>
      </div>
    </>
  );
};

export default HotelItem;
