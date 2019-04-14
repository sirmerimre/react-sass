import React, {Component} from 'react';
import './css/main.css'
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
    render() {
        return (
            <span>
            <span id="bg"></span>
                <Header/>
                <Body/>
            </span>
        );
    }
}

export default App;
