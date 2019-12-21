import React from 'react';
import css from './App.module.css';
import Answers from './Answers/Answers'
import Category from "./Category/Category";
import Questions from "./Questions/Questions";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={css.mainApp}>
                <div className={css.logo}><h1>Flyla</h1></div>
                <Category/>
                <Route path='/Questions' render={() => <Questions/>}/>
                <Answers/>
            </div>
        </BrowserRouter>
    );
}

export default App;