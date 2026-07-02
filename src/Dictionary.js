import React, {useState} from 'react';
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let[keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
   setResults(response.data);
}
    

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You searched for ${keyword}`);

       let word = keyword;
  let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";

  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;


        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleKeywordChange}
                />
            </form>
            <Results results={results} />
        </div>
    );
}