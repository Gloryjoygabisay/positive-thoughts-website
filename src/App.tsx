import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThoughtCard from './components/ThoughtCard';
import './styles/app.css';

const thoughts = [
  "Believe in yourself and all that you are.",
  "Every day may not be good, but there's something good in every day.",
  "You are enough just as you are.",
  "Happiness is not by chance, but by choice.",
  "The best time for new beginnings is now."
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Positive Thoughts</h1>
        <div className="thoughts-container">
          {thoughts.map((thought, index) => (
            <ThoughtCard key={index} thought={thought} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;