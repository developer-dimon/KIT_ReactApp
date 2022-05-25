import React from "react";
import Layout from "./compoments/Base/Layout";
import {Route, Routes} from "react-router";
import AuthPage from "./pages/authPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="/auth" element={<AuthPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }
}


export default App;

