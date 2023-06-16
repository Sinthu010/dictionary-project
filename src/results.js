import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h4>Definition:</h4>
        <h2> {props.results}</h2>
      </div>
    );
  } else {
    return <div> No results found </div>;
  }
}
