import React from 'react';
import { useState } from 'react';
import CheckWin from './components/CheckWin'
import ChangeTurns from './components/ChangeTurns'
import Square from './components/Square'

export default function Tictactoe() {
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState("X");
  const [squareV, setSquareV] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const [won, setWon] = useState("");

  const newTurn = () => {
    var turn2= ChangeTurns(turn, setTurn);
    setTurn(turn2);
    setCount(count + 1);
    const sValue = squareV.slice();
    setHistory(history.concat([sValue]));

    if( (history.length ===8)&& (won.length !== 5) ){
      setWon("TIE GAME");
    }    
  }

  const back = () => {
    if (history.length > 1) {
      squareV.map((value, index) => {
        squareV[index] = history[count - 2][index];
      });
      history.length = count - 1;
      setCount(count - 1);
      var turn2= ChangeTurns(turn, setTurn);
      setTurn(turn2);      
      setWon("");
    }
  }

  const newGame = () => {
    setSquareV(Array(9).fill(null));
    setHistory([]);
    setCount(0);
    setWon("");
    setTurn("X");
  }

  return (
    <div style={main}>
      <div  >
        <p style={turnStyle}>{turn } Turn</p> 
        <div style={main2}>
          <Square setWon={setWon} won={won} num={0} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={1} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={2} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={3} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={4} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={5} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={6} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={7} newTurn={newTurn} turn={turn} squareV={squareV} />
          <Square setWon={setWon} won={won} num={8} newTurn={newTurn} turn={turn} squareV={squareV} />
        </div>

        <div style= {buttonStyle}> 
          <button style={button} onClick={() => back()} >Back </button>
          <button style={button} onClick={() => newGame()} >New Game </button>
        </div>
        <div> <p style={wonStyle}>{won} </p> </div>

      </div>
    </div>
  );
}



const main = {
  backgroundColor: " #b3e6ff ",
  width: "56%",
  display: "block",
  marginLeft: "auto", 
  marginRight: "auto",
  marginTop: "7%",
}

const main2= {
  // backgroundColor: "rgb(172, 235, 254)",
   display: "grid",
   gridTemplateColumns: "auto auto auto ",
   padding:"5px",
   width:"50%",
   marginLeft: "auto",
   marginRight: "auto",
 }


const button = {
  backgroundColor: "grey",
  width: "70px",
  height: "60px",
  marginTop: "15px",
  fontSize: "14px",
  color: "white",
};

const buttonStyle= {
  display: "grid",
  gridTemplateColumns: "auto auto ",
  width:"50%",
  padding:"5px",
  marginLeft: "33%",
  paddingBottom: "40px",
}

const turnStyle={
  backgroundColor: "",
  height: " 50%",
  width:"50%",
  fontSize:"30px",
  marginLeft: "45%",
  paddingTop:"20px",

}

const wonStyle = {
  color: "black",
  fontSize: "40px",
  marginLeft: "37%",
  paddingBottom: "37px",
  
};



