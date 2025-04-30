import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThoughtCard from './components/ThoughtCard';
import './styles/app.css';

const thoughts = [
  { text: "Believe in yourself and all that you are.", category: "Motivational" },
  { text: "Every day may not be good, but there's something good in every day.", category: "Gratitude" },
  { text: "You are enough just as you are.", category: "Mindfulness" },
  { text: "Happiness is not by chance, but by choice.", category: "Inspirational" },
  { text: "The best time for new beginnings is now.", category: "Personal Growth" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivational" },
  { text: "Gratitude turns what we have into enough.", category: "Gratitude" },
  { text: "Mindfulness is the key to a happy and peaceful life.", category: "Mindfulness" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspirational" },
  { text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.", category: "Personal Growth" }
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