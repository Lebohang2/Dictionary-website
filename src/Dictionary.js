import React, {useState} from 'react';
import "./Dictionary.css";

export default function Dictionary() {
    let[keyword, setKeyword] = useState("null");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You searched for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleKeywordChange}
                />
            </form>
        </div>
    );
}