import React, { useState } from 'react';
import type { CSSProperties } from 'react';

type BacktrackingProps = { className?: string; style?: CSSProperties };

const Backtracking: React.FC<BacktrackingProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Backtracking</h1>
         <h2>Recursive Search with Pruning</h2>
         Backtracking explores all possible solutions by building candidates incrementally and abandoning paths that fail constraints.

         <button
            className="btn btn-primary d-block my-2 mx-auto"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            Backtracking Details:
         </button>

         {showThis ? (
            <div id="backtracking">
               <h3>Backtracking:</h3>
               A depth-first search strategy that undoes decisions when a path fails.
               <h4>Used for Combinatorics, Constraint Solving, and Puzzle Solvers</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">N-Queens Example</h5>
                  <b className="explanation">
                     Place N queens on an N×N chessboard so that no two queens threaten each other.
                  </b>
                  <pre className="text-start d-block">
{`function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  const solutions = [];

  function backtrack(row = 0) {
    if (row === n) {
      solutions.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
    }
    return true;
  }

  backtrack();
  return solutions;
}`}</pre>
                  time complexity O(N!)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Subset Generation</h5>
                  <b className="explanation">
                     Generate all subsets (power set) of a given array using backtracking.
                  </b>
                  <pre className="text-start d-block">
{`function subsets(nums) {
  const result = [];

  function backtrack(start = 0, path = []) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack();
  return result;
}`}</pre>
                  time complexity O(2ⁿ)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Sudoku Solver</h5>
                  <b className="explanation">
                     Classic constraint satisfaction problem solved via recursive backtracking.
                  </b>
                  <pre className="text-start d-block">
{`function solveSudoku(board) {
  function isValid(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === val || board[i][c] === val) return false;
      const boxRow = 3 * Math.floor(r / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(c / 3) + i % 3;
      if (board[boxRow][boxCol] === val) return false;
    }
    return true;
  }

  function backtrack() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let d = 1; d <= 9; d++) {
            const val = d.toString();
            if (isValid(r, c, val)) {
              board[r][c] = val;
              if (backtrack()) return true;
              board[r][c] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  backtrack();
}`}</pre>
                  time complexity O(9⁸²) worst case
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Backtracking;
