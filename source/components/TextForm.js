import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared","Success")
  };

  const handleCopyClick = () => {
    var text=document.getElementById("mybox");
    text.select();
    props.showAlert("Text is Copied","Success")
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed","Success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="Form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            style={{color:props.mode==="light"?"black":"white", backgroundColor:props.mode==="light"?"white":"grey",cursor:"pointer"}}
            cols="170"
            rows="12"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text-box to preview it here"}</p>
      </div>
    </>
  );
}
