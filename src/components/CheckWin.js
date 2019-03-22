
function CheckWin(squareV, turn, setWon) {

  var winValue=false;
  var won;
  
   
  if(diagonalWin (squareV ) || columnWin (squareV ) || rowWin (squareV )){
    setWon(turn + " WON");
    won=turn;
  } 
  return won; 
}
  
function diagonalWin (squareV){
    //diagonalWin 
    if ((squareV[4] !== null) && (squareV[0] === squareV[4]
      && squareV[0] === squareV[8])) {
        return true;
    }
    else if ((squareV[4] !== null) && (squareV[2] === squareV[4]
      && squareV[2] === squareV[6])) {
        return true;
    }
}

  function columnWin (squareV){
    //columnWin
    if ((squareV[3] !== null) && (squareV[0] === squareV[3]
      && squareV[0] === squareV[6])) {   
        return true;
    }
    else if ((squareV[4] !== null) && (squareV[1] === squareV[4]
      && squareV[1] === squareV[7])) {     
        return true;
    }
    else if ((squareV[5] !== null) && (squareV[2] === squareV[5]
      && squareV[2] === squareV[8])) {     
        return true;
    }
}

  function rowWin (squareV){
    //rowWin
    if ((squareV[1] !== null) && (squareV[0] === squareV[1]
      && squareV[0] === squareV[2])) {    
        return true;
    }
    else if ((squareV[4] !== null) && (squareV[3] === squareV[4]
      && squareV[3] === squareV[5])) {     
        return true;
    }
    else if ((squareV[7] !== null) && (squareV[6] === squareV[7]
      && squareV[6] === squareV[8])) {      
        return true;
    }
}

export default CheckWin;

