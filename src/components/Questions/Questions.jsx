import React from 'react';
import Category from "../Category/Category";
import {BrowserRouter, Route} from "react-router-dom";
import css from './Questions.module.css'


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={css.questions}>
                    <div><h1 className={css.title_of_list}>Выберите вопрос:</h1></div>
                </div>
                <div>

                </div>
            </BrowserRouter>


        );
    }
}

export default Questions;