import React from "react";
import "./DictionaryImages.css";


export default function DictionaryImages(props) {
  if (props.images) {
    console.log(props.images);

    return (
      <div className="DictionaryImages">
        {props.images.slice(0, 6).map(function (image, index) {
          return (
            <a href={image.src.original} target="_blank" rel="noreferrer" key={index}>
              <img src={image.src.landscape} alt={image.alt} />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}