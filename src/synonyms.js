import React from "react";

export default function synonyms(props) {
  if (props.synonyms) {
    const synonymList = props.synonyms.join(", ");
    return (
      <div>
        {" "}
        <br></br>Synonyms: {synonymList}
      </div>
    );
  } else {
    return null;
  }
}
