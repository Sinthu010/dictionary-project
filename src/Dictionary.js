import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./results.js";

export default function Dictionary(props) {
  // state is called keyword
  // to change setKeyword component called
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search() {
    // prevent page resetting
    // uses Axios library to send an HTTP GET request to the apiURL
    // handleResponse is passed as the callback function to be executed when the response is received
    let apiKey = "2abt2f6340do47141b6f92d3a14301be";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    // stores target value of the event in 'keyword'
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      // creates event listeners
      // when form submitted, search function is called
      // when input is changed updateKeyword is called
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={updateKeyword}
              placeholder="What word would you like to search for?"
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
        </section>
        <Results results={result}></Results>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
