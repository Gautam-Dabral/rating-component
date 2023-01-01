export default function Content(props) {
  return (
    <div className="content">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
