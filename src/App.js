import React from "react";
import Layout from "./compoments/Layout";
import {Route, Routes} from "react-router";
import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path="/login" element={<SignInPage/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }
}


export default App;

