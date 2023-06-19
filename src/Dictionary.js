import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./results.js";

export default function Dictionary() {
  // state is called keyword
  // to change setKeyword component called
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    //prevent page resetting
    // uses Axios library to send an HTTP GET request to the apiURL
    //handleResponse is passed as the callback function to be executed when the response is received
    event.preventDefault();
    let apiKey = "2abt2f6340do47141b6f92d3a14301be";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
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
      <section>
        <form onSubmit={search}>
          <input type="text" onChange={updateKeyword}></input>
        </form>
      </section>
      <Results results={result}></Results>
    </div>
  );
}
