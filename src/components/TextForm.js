import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
       
        let newtext=text.toLocaleUpperCase();
        setText(newtext);
        props.showAlert('converted to uppercase','success');
    }
    const handleLoClick=()=>{
       
        let newtext=text.toLocaleLowerCase();
        setText(newtext);
        props.showAlert('converted to lowercase','success');
    }
    const handleClClick=()=>{
       
        let newtext='';
        setText(newtext);
        props.showAlert('clearing text','success');
    }
    const Capitalizer=()=>{
        setText(text.charAt(0).toUpperCase() + text.slice(1));
        props.showAlert('capitalising first letter','success');
    }
    const handleCopy=()=>{
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('coping to clipboard','success');
    }
    const remExtSpace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(' '))
        props.showAlert('removing extra spaces','success');
    }

    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}} >
            <h1 className="text-center">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" 
                value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'black'}} id="mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-dark mx-3 my-3" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-dark mx-3 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-dark mx-3 my-3" onClick={handleClClick}>Clear the text</button>
            <button className="btn btn-dark mx-3 my-3" onClick={Capitalizer}>Capitalize first character</button>
            <button className="btn btn-dark mx-3 my-3" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-dark mx-3 my-3" onClick={remExtSpace}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read(reference 25word/min)</p>
            <h2>preview</h2>
            <p>{text.length>0 ? text : "Enter your text above to preview"}</p>
        </div>
        </>
    )
}
