import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ item }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="card" onClick={() => setShowAnswer(!showAnswer)}>
            <div className="question">{item.question}</div>
            {showAnswer && <div className="answer">{item.answer}</div>}
        </div>
    );
};

export default Card;
