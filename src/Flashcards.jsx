import React, { useState } from "react";

function Flashcards() {
  const [cards, setCards] = useState([
    {
      question: "What is React?",
      answer: "A JavaScript library for building UIs",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setShowAnswer(false);
  };

  return (
    <div>
      <h3>Flashcards</h3>
      <div>
        <p>{cards[currentIndex].question}</p>
        {showAnswer && <p>{cards[currentIndex].answer}</p>}
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button onClick={nextCard}>Next Card</button>
      </div>
    </div>
  );
}

export default Flashcards;
