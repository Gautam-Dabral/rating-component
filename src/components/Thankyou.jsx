import Content from "./Content";
import ThankyouSvg from "./ThankyouSvg";

export default function Thankyou(props) {
  return (
    <div className="container center">
      <ThankyouSvg />
      <div className="selection">
        <h4>You selected {props.hasRated.value} out of 5</h4>
      </div>
      <Content
        title="Thank you!"
        desc="We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!"
      />
    </div>
  );
}
