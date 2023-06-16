import React from "react";
import Meaning from "./meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2> {props.results.word} </h2>
        <div> phonetic: {props.results.phonetic} </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning}></Meaning>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div> No results found </div>;
  }
}
