import React from 'react'
import CheckWin from './CheckWin'
import { mount, shallow, render, Enzyme } from 'enzyme';

const setWon = (value) => {
  var won=value;
}

  test('1', () => {
    var squaresV = ["X", "O", null, null, "X", "O", null, null, "X"];
    expect(CheckWin(squaresV, "X",setWon)).toBe("X");  
  }); 

  test('2', () => {
    var squaresV = ["X", "X", "X", "O", null, "O", null, null, null];
    expect(CheckWin(squaresV, "X",setWon)).toBe("X");
  });

  test('3', () => {
    var squaresV = [null, "O", null, "X", "X", "X", null, null, "O"];
    expect(CheckWin(squaresV, "X",setWon )).toBe("X"); 
  }); 

  test('4', () => {
    var squaresV = [null, "O", null, "O", null, null, "X", "X", "X",];
    expect(CheckWin(squaresV, "X",setWon )).toBe("X");
  });

  //Not a win, test call return undefined as expected 
  test('5', () => {
    var squaresV = ["O", null, null, "O", null, "O", "X", null, "X",];
    expect(CheckWin(squaresV, "O",setWon )).toBe(undefined); 
  });
  
  //Not a win, test call return undefined as expected 
  test('6', () => {
    var squaresV = ["X", null, null, null, null, null, null, null, null];
    expect(CheckWin(squaresV, "O" ,setWon)).toBe(undefined); 
  });  

  //Not a win, test call return undefined as expected 
  test('7', () => {
    var squaresV = [null, null, null, null, null, null, null, null, null];
    expect(CheckWin(squaresV, null ,setWon)).toBe(undefined); 
  });  

  test('8', () => {
    var squaresV = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
    expect(CheckWin(squaresV, "X",setWon)).toBe("X"); 
  });  
  
  test('9', () => {
    var squaresV = [null, null, null, null, null, null, "X", "X", "X"];
    expect(CheckWin(squaresV, "X",setWon)).toBe("X"); 
  });  

  test('10', () => {
    var squaresV = [null, null, "X", null, "X", null, "X", null, null];
    expect(CheckWin(squaresV, "X" ,setWon)).toBe("X");  
  });  

  test('11', () => {
    var squaresV = [null, "X", null, null, "X", null, null, "X", null];
    expect(CheckWin(squaresV, "X" ,setWon)).toBe("X");  
  });  

  test('12', () => {
    var squaresV = [null, null, "X", null, null, "X", null, null, "X"];
    expect(CheckWin(squaresV, "X" ,setWon)).toBe("X");  
  });  

  test('13', () => {
    var squaresV = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    expect(CheckWin(squaresV, "X" ,setWon)).toBe("X");  
  });  
 


 
