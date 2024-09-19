import React, { useState } from 'react';
import axios from 'axios';
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [searchTerm, setTerm] = useState("");
    let [results, setResults] = useState(null);

    
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    function search(event) {
      event.preventDefault();
      // documentation : https://www.shecodes.io/learn/apis/dictionary
      let key = "5a66ffb09c7a4o246a78be8f021tfdd3";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${key}`;
      axios.get(apiUrl).then(handleResponse);
    }
    function handleSearchTeamChange(event) {
        setTerm(event.target.value);
    }
    return (
        <div className="Dictionary">
            <h2>What word would you like to explore?</h2>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange = {handleSearchTeamChange}  />
            </form>
            <Results results={results} />
        </div>
    );
}