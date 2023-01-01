export default function RatingItem(props) {
  const styleOrange = {
    backgroundColor: "hsl(25, 97%, 53%)",
    color: "white"
  };

  return (
    <div
      className="rating-item"
      onClick={() => {
        props.handleClick(props.value);
      }}
      style={
        props.status ? styleOrange : { backgroundColor: "hsl(214, 25%, 22%)" }
      }
    >
      {props.value}
    </div>
  );
}
