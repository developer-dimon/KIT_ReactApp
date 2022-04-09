import React from "react";
import './css/style.css';
import UserList from "./Users/userList";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <UserList/>
            </div>
        );
    }
}


export default App;

