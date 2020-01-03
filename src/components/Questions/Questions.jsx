import React from 'react';
import Category from "../Category/Category";
import {BrowserRouter, Route} from "react-router-dom";
import css from './Questions.module.css'


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const categoryIdWasChanged = this.props.indexName !== prevProps.indexName;

        if (this.props.indexName && categoryIdWasChanged) {
            fetch(`https://opentdb.com/api.php?amount=10&category=${this.props.indexName}`)
                .then(question => {
                    return question.json();
                })
                .then(question => {
                    this.setState({
                        questions: question.results
                    })
                })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={css.questions}>
                    <div><h1 className={css.title_of_list}>Выберите вопрос:</h1></div>
                    <ul>
                        {this.state.questions.map((item) => {
                            return <li>{item.question}</li>
                        })}
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}

export default Questions;