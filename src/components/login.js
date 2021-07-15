import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//function Component that will verify the login and route it to contact page.



export default function Login() {
    const [userName, setUserName] = useState(""); //Call back function for user name
    const [password, setPassword] = useState(""); //Call back function for Password

    let history = useHistory();

    function validateForm() {
        return userName.length > 1 && password.length > 1;
    };

    function handleSubmit(event) {
        event.preventDefault();

        if (userName === "admin" && password === "admin") {
            //alert("Login Sucessful");
            history.push("home", { authorize: true });
        }
        else {
            alert("Invalid User Name or Password");
            setUserName(""); //Reset the value 
            setPassword("");
        }
    };



    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                </h2>
                <form className="ui large form" onSubmit={handleSubmit}>
                    <div className="ui stacked segment">
                        <div className="field">
                            <input type="text" name="username" placeholder="User Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}></input>
                        </div>
                        <div className="field">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button className="ui primary button" disabled={!validateForm()}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );

}