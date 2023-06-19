import React from "react";
import Synonyms from "./synonyms.js";
import Example from "./example.js";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <p className="PartOfSpeech"> {props.meaning.partOfSpeech}</p>
        <p> Definition: {props.meaning.definition}</p>
        <em>
          <Example example={props.meaning.example} />
        </em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
