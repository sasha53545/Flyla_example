import React from 'react';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api_category.php')
            .then(response => {
                return response.json()
            })
            .then(category => {
                //this.setState({category: category['trivia_categories']});
                this.setState({category: category['trivia_categories']});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <BrowserRouter>
                <ul>
                    {this.state.category.map(item => (
                        //<li>{item.name}</li>
                        <li><NavLink className="nav-link" to="/Questions">{item.name}</NavLink></li>
                        //console.log(item)
                    ))}
                </ul>
            </BrowserRouter>
        );
    }
}

export default Category;