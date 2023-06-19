export default function Synonyms(props) {
  if (props.synonyms) {
    const synonymList = props.synonyms.join(", ");
    return `Synonyms: ${synonymList}`;
  } else {
    return null;
  }
}
