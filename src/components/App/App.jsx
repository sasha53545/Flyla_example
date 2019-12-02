import React from 'react';
import './App.module.css';
import Answers from "../Answers/Answers";
import Category from "../Category/Category";
import Questions from "../Questions/Questions";

function App() {
    return (
      <div>
          <Category/>
          <Questions/>
          <Answers/>
      </div>
    );
}

export default App;