import React, { useState } from 'react';
import type { CommonProps } from '@types';

const Hashing = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Hashing & Frequency Maps</h1>
         <h2>Fast Lookups and Counting</h2>
         Hashing uses key-value pairs for constant-time access, while frequency maps track occurrences of elements for efficient grouping, counting, and filtering.

         <button
            className="btn btn-primary d-block mx-auto my-2"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            Hashing & Frequency Maps Details:
         </button>

         {showThis ? (
            <div id="hashing">
               <h3>Hashing & Frequency Maps:</h3>
               Ideal for problems involving lookups, grouping, and frequency analysis.
               <h4>Used for Deduplication, Anagram Detection, and Sliding Window Optimization</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Character Frequency Counter</h5>
                  <b className="explanation">
                     Count how many times each character appears in a string.
                  </b>
                  <pre className="text-start d-block">
{`function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Valid Anagram</h5>
                  <b className="explanation">
                     Check if two strings are anagrams using frequency maps.
                  </b>
                  <pre className="text-start d-block">
{`function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">First Unique Character</h5>
                  <b className="explanation">
                     Use a frequency map to find the first non-repeating character in a string.
                  </b>
                  <pre className="text-start d-block">
{`function firstUniqChar(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
}`}</pre>
                  time complexity O(n)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Hashing;
