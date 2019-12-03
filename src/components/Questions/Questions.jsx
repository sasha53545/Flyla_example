import React from 'react';
import Category from "../Category/Category";
import {BrowserRouter, Route} from "react-router-dom";


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        fetch(' https://opentdb.com/api.php?amount=10')
            .then(response =>{
                return response.json()
            })
            .then(questions => {
                this.setState({questions: questions})
            })
    }

    render() {
        return (
            <BrowserRouter>
                <Route path='/Category' render={() => <Category/>}/>
                {console.log(this.state)}
            </BrowserRouter>


        );
    }
}

export default Questions;