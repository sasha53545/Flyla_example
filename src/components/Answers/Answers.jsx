import React from 'react';
import css from './Answers.module.css'

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={css.answers}>
                <div><h1 className={css.title_of_list}>Ответ на ваш вопрос:</h1></div>

            </div>
        );
    }
}

export default Answers;