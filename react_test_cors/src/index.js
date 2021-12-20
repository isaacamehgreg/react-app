import React from 'react';
import  ReactDOM  from 'react-dom';



const App = () => {
    return(
        <div>
            <h1>Hello</h1>
            <p>here</p>
            <button style={{backgroundColor:'red', color: 'white'}}> Submit</button>

        </div>
     
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)