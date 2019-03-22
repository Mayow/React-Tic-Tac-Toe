import React from 'react';
import CheckWin from './CheckWin'
import Enzyme from 'enzyme';


function Square(props) {
    const { squareV, turn, num, newTurn, setWon, won} = props;
    
    const update = () => {
      if (squareV[num] == null) {
        squareV[num] = turn; 
        newTurn();
      }
      CheckWin(squareV, turn, setWon, won);     
    }


    return (
      <button className="squareButton" style={square} onClick={() => update()}>
        <div className="squareValue" >  {squareV[num]}</div>
      </button>
    );
  } 

  const square = {
    backgroundColor: "white",
    borderColor: "black",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "4px",
    width: "80px",
    height: "70px",
  };

  export default Square;