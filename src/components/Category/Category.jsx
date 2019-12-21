import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Category.module.css'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstApiCategory: [],
            secondApiQuestions: [],
            secondApiCategory: [],
            lastClickAdd: []
        };

        this.openQuestion = this.openQuestion.bind(this);
    }

    openQuestion(item) {

    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then(response => {
                return response.json();
            })
            .then(questions => {
                let quest = questions.results.map((item) => {
                    return item.question;
                });
                let categ = questions.results.map((item) => {
                    return item.category;
                });
                this.setState({
                    secondApiQuestions: quest,
                    secondApiCategory: categ
                });
            })
            .catch(error => {
                console.log('error: ', error);
            });

        fetch('https://opentdb.com/api_category.php')
            .then(response => {
                return response.json()
            })
            .then(category => {
                //this.setState({category: category['trivia_categories']});
                this.setState({firstApiCategory: category['trivia_categories']});
            })
            .catch(error => {
                console.log('error: ', error);
            })
    }

    render() {
        return (
            <div className={css.category}>
                <div>
                    <h1 className={css.title_of_list}>Выберите категорию:</h1>
                </div>
                <div className={css.list_of_category}>
                    <ul>
                    {this.state.firstApiCategory.map((item) => {
                        return <li><NavLink className="nav-link" to="/questions" onClick={() => {
                            if (this.state.secondApiCategory.indexOf(item.name)) {
                               this.setState(
                                   console.log(this.state.secondApiQuestions[this.state.secondApiCategory.indexOf(item.name)])
                               )
                            }
                        }}>{item.name}</NavLink></li>
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;