import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import Header from "./Components/AlwaysDisplay/Header/header";
import NavMenu from "./Components/AlwaysDisplay/NavMenu/navMenu";
import ContentLayer from "./Components/AlwaysDisplay/ContentLayer/contentLayer";


function App() {
    return (
        <div className='app_wrapper'>

            <div className='header'>
                <Header/>
            </div>

            <div className='layer'>
                <nav className='nav'>
                    <NavMenu/>
                </nav>

                <div className='content'>
                    <ContentLayer/>
                </div>

            </div>

        </div>
    );
}

export default App;
