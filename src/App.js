import React, {useState} from "react";
import './css/style.css';
import Preloader from "./common/Preloader";
import Button from "./common/Button";
import UserList from "./Users/userList";

class App extends React.Component {
    state = {
        userInfo: undefined,
        loading: false
    };

    getUsers = async () => {
        this.setState({ loading: true });
        const url = await fetch("https://randomuser.me/api/?results=10");
        const data = await url.json();

        this.setState({
            userInfo: data.results,
            loading: false
        });
    };

    render() {
        return (
            <div className="App">
                <Button onClick={() => this.getUsers()} label={"Generator User API"} />
                {this.state.loading ? (<Preloader/>) : <UserList users={this.state.userInfo} />}

            </div>
        );
    }
}
export default App;

