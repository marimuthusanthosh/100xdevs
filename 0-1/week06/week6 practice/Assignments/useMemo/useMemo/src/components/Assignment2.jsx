import React, { useEffect, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    const filteredSentences = sentences.filter(x => x.includes(filter))

    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}



// import React, { useState, useMemo } from 'react';

// const sentences = [
//   "React is a JavaScript library for building user interfaces.",
//   "Hooks are a new addition in React 16.8.",
//   "useMemo helps optimize expensive calculations.",
//   "React components can be functional or class-based.",
//   "Filtering large lists can be slow without optimization.",
//   "This is a simple sentence.",
//   "The quick brown fox jumps over the lazy dog.",
//   "Learning React makes front-end development easier.",
//   "Use useMemo when you want to avoid unnecessary recalculations.",
//   "Search through these sentences to see optimization in action.",
//   // Add more sentences here to simulate a large dataset
// ];

// function Assignment2() {
//   const [filter, setFilter] = useState('');

//   const filteredSentences = useMemo(() => {
//     console.log('Filtering sentences...');
//     return sentences.filter(sentence =>
//       sentence.toLowerCase().includes(filter.toLowerCase())
//     );
//   }, [filter, sentences]); // ⚠️ Both filter and sentences are dependencies

//   return (
//     <div>
//       <h2>Sentence Filter</h2>
//       <input
//         type="text"
//         placeholder="Type to filter sentences..."
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       />
//       <ul>
//         {filteredSentences.map((sentence, index) => (
//           <li key={index}>{sentence}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Assignment2;