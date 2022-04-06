export default function LaboratoryCard(props) {
  return (
    <div className="box">
      <a href={`/laboratories/${props.lid}`}>
        <h3>labo name</h3>
      </a>
    </div>
  );
}
