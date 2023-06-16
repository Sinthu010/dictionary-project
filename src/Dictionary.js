import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  // state is called keyword
  // to change setKeyword component called
  let [keyword, setKeyword] = useState("");

  function search(event) {
    //prevent page resetting
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function updateKeyword(event) {
    //stores target value of the event in 'keyword'
    setKeyword(event.target.value);
  }

  return (
    // creates event listeners
    // when form submitted, search function is called
    // when input is changed updateKeyword is called
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="text" onChange={updateKeyword}></input>
      </form>
    </div>
  );
}
