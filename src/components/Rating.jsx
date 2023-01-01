import React from "react";
import Star from "./Star";
import Content from "./Content";
import RatingItem from "./RatingItem";

export default function Rating(props) {
  return (
    <div className="container">
      <Star />
      <Content
        title="How did we do?"
        desc="Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!"
      />
      <div className="rating">
        {props.ratingElements.map((item) => {
          return (
            <RatingItem
              key={item.id}
              value={item.id}
              handleClick={(value) => {
                props.handleClick(value);
              }}
              status={item.on}
            />
          );
        })}
      </div>
      <button className="btn-submit" onClick={props.handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}
