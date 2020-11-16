import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    console.log('This is props in APPS')
    console.log(props)
  return (
        <div className="app-wrapper">
            <Header />
            {/*<Navbar store={props.store} />*/}
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/profile' render={ () => <Profile /> } />
                {/*<Route path='/profile' render={ () => <Profile store={props.store}/> } />*/}
                <Route path='/dialogs' render={ () => <DialogsContainer />} />
                {/*<Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />*/}
                <Route path='/news' render={ () => <News/>} />
                <Route path='/music' render={ () => <Music/>} />
                <Route path='/settings' render={ () => <Settings/>} />
            </div>
        </div>
  )
}

export default App;


