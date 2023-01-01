import React from "react";
import Rating from "./Rating";
import Thankyou from "./Thankyou";

export default function App() {
  const [ratingElements, setRatingElements] = React.useState([
    { id: "1", on: false },
    { id: "2", on: false },
    { id: "3", on: false },
    { id: "4", on: false },
    { id: "5", on: false }
  ]);
  const [hasRated, setHasRated] = React.useState({
    status: false,
    value: "0"
  });

  const handleClick = (id) => {
    setRatingElements((prevValue) => {
      return prevValue.map((item) => {
        return id === item.id ? { ...item, on: !item.on } : item;
      });
    });

    setHasRated({
      value: id
    });
  };

  const handleSubmit = () => {
    setHasRated((prevValue) => ({
      ...prevValue,
      status: true
    }));
  };

  return hasRated.status ? (
    <Thankyou hasRated={hasRated} />
  ) : (
    <Rating
      ratingElements={ratingElements}
      handleClick={handleClick}
      handleSubmit={handleSubmit}
    />
  );
}
