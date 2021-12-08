import logo from './logo.svg';
import './App.css';
import axios from "axios"



function App() {

  var data = JSON.stringify({
    "email": "isaac@test.com",
    "password": "isaac"
  });
  
  var config = {
    method: 'post',
    url: 'https://paperdaz-backend.herokuapp.com/api/v2/auth/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
