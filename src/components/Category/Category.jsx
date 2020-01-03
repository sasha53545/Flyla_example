import React from 'react';
import {NavLink, Route} from "react-router-dom";
import css from './Category.module.css'
import Questions from "../Questions/Questions";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
            categories: []
        };
    }

    componentDidMount() {
        fetch('https://opentdb.com/api_category.php')
            .then(response => {
                return response.json();
            })
            .then(categories => {
                this.setState({
                    categories: categories.trivia_categories
                });
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }

    render() {
        return (
            <div className={css.category}>
                <div>
                    <h1 className={css.title_of_list}>Выберите категорию:</h1>
                </div>
                <div className={css.list_of_category}>
                    <ul>
                        {this.state.categories.map((item) => {
                            return <li onClick={() => this.setState({current: item.id})}><NavLink to='/questions'>{item.name}</NavLink></li>
                        })}
                    </ul>
                </div>
                <Route path='/questions' render={() => <Questions indexName={this.state.current}/>}/>
            </div>
        );
    }
}

export default Category;