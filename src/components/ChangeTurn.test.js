import React from 'react'
import { mount, shallow, render, Enzyme } from 'enzyme';
import ChangeTurns from './ChangeTurns'

const setTurn = (turn) => {
    if (turn === "X") {
        return "O"; 
  }
  else {
    return "X";  
  }
}

// test('change turn from X to O', () => {
//     expect(ChangeTurns("X", setTurn)).toBe("O");
//   });

// test('change turn from O to X', () => {
//     expect(ChangeTurns("O", setTurn)).toBe("X");
// });
