import ReactDOM from 'react-dom';
import React from 'react';

import logo from './logo.svg';

import Register from "./Register";
import axios from 'axios';

const loginsAPI = ("http://localhost:8081/logins");



export default function Home(){

    function submit(){
        axios.get(loginsAPI).then(function (response){document.getElementById("main").append(response.data[6])});
    
    }


    return(
        <>
        <h3>Login</h3>
        {/*<form>*/}
            <input type="text" placeholder="Email" id="emailIn"></input><br/>
            <input type="password" placeholder="Password" id="pswdIn"></input><br/>
            <button id="loginSubmit" onClick={submit}>Submit</button><br/>
        {/*</form>*/}
        <p>Not a registered user? Create an Account <a href="javascript:void(0)" onClick={register}>here</a></p>
        
<br/>
        <img src={logo} className="App-logo" alt="logo" /><br/>
        <p>Come to the dark side; we have cookies :)</p>

        </>
    )
}


function register(){
    ReactDOM.render(
        <React.StrictMode>
          <Register/>
        </React.StrictMode>,
        document.getElementById('main')
      );
}


