import React, {useState} from 'react';
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import DictionaryImages from "./DictionaryImages";

export default function Dictionary(props) {
    let[keyword, setKeyword] = useState(props.standardKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [images, setImages] = useState(null);

    function handleDictionaryResponse(response) {
   setResults(response.data);
   console.log(response.data);
}

   function handleImageResponse(response) {
   console.log(response.data);
   setImages(response.data.photos);
}
 
   function handleSearch() {

   let word = keyword;
   let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";

   let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

   axios.get(apiUrl).then(handleDictionaryResponse);

    let imageKey = "410o3ft86210d5f3d73f24a4d34d2bab";
    let imageUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageKey}`;

    axios.get(imageUrl).then(handleImageResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        console.log(event.target.value);
    }

    function load() {
        setLoaded(true);
        handleSearch();
    }

    if(loaded) {
 return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
                 <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="search"
                  name="search"
                  onChange={handleKeywordChange} defaultValue={props.standardKeyword}
                />
            </form>
            <div className="hint">
                suggested words: sunset, juice, running, jungle...
            </div>
            </section>
           
            <Results results={results} />
            <DictionaryImages images={images} />
        </div>
    );
}else {
    load();
    return "Loading...";
}
}