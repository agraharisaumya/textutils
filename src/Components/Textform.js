import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("handle upper was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success");
    }
    const handleLowClick=()=>{
        //console.log("handle lower was Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClrClick=()=>{
        //console.log("handle lower was Clicked");
        let newText=' ';
        setText(newText);
        props.showAlert("The text was cleared","success");
    }
    const handleCopyClick=()=>{
        
        let newText=document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard","success");
        
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space was removed","success");
    }
    const handleChange=(event)=>{
       // console.log("handle change was clicked");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} id="mybox" rows="7" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleChange}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-success mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
<button className="btn btn-danger mx-1" onClick={handleClrClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-success mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>    
        <h1>Your text summary</h1>
        <p>{text.length} Characters</p>
        <p>{text.split(" ").length} words</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something  above textbox to  preview  it here"}</p>

    </div>
    </>
  );
}
