export default function Synonyms(props) {
  if (props.synonyms) {
    const synonymList = props.synonyms.join(", ");
    return (
      <div>
        <br></br>
        Synonyms: {synonymList}
      </div>
    );
  } else {
    return null;
  }
}
