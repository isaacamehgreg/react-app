import React from 'react';
import  ReactDOM  from 'react-dom';


function getButtonText(){
    return 'hi there'
}

const style = {
    text: 'submit',
    backgroundColor:'green'
}

const App = () => {

    return(
        <div>
            <label htmlFor="name">Name</label> 
            <h1>Hello</h1>
            <p>here</p>
            <button style={{backgroundColor:'red', color: 'white'}}> {style.text} {getButtonText()}</button>

        </div>
     
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)