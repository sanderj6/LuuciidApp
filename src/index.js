// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'

// Create a React component
const App = function () {

    const buttonText = "Click Me Test 2";
    const labelText = "Enter name:";
    const style = { backgroundColor: 'blue', color: 'white' };
    const styleBucket = { position: 'relative', display: 'inline-block' };

    var Background = process.env.PUBLIC_URL + '/bgImage.JPG';

    var sectionStyle = {
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundImage: `url(${Background})`
    };

    return (
        <div style={styleBucket}>
            {/* <section style={{backgroundImage: "url(" + Background + ")"}}>
            </section> */}

            <div>
                <img src="/bgImage.jpg" alt="image" style={sectionStyle} />
            </div>

            <div className="row">
                <Button variant="contained" color="primary">
                    Ear rings
            </Button>
            </div>
            <div className="row">
                <Button variant="contained" color="primary">
                    Clay Cutters
                  </Button>
            </div>
            <div className="row">
                <Button variant="contained" color="primary">
                    Custom Work
                  </Button>
            </div>
            <div>
                <label className="label" htmlFor="name">{labelText}</label>
                <input id="name" type="text" />
                <button style={style}>{buttonText}</button>
            </div>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);