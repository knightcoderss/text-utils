import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handelCopyClick = () => {
    if(text != ''){
      navigator.clipboard.writeText(text);
      // Alert the copied text
      alert("Copied the text: " + text);
    }
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handelCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters{" "}
        </p>
        <p>{text.split(" ").length * 0.008} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
