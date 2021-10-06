// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {

    // const [mystyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black',
    //     border: '1px solid white'
    // })
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        
    }
    // const [btntext, setBtnText] = useState('Enable Light Mode')

    // const toggleStyle = () => {
    //     if (mystyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    // }

    return (
        <div className="container" >
            <h2 className="my-2 text-center" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils gives you a way to analyse your text quickly and effectively.
                            be it word count,character count,previewing the text, time to read the text
                            and many more other functionality.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            textUtils is a free website which can be used to as counter for counting the characters as well as the words for a given text. Thus it is suitable for writing text with words/character limits.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            This word counter software works in any browser  such as chrome ,fire fox,safari,opera.It suits to count the character in facebook,books,pdfs,essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" className="btn btn-primary my-2" onClick={toggleStyle} >{btntext}</button>
            </div> */}
        </div>

    )
}
