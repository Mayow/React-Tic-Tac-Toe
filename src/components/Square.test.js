import React from 'react'
import Square from './Square'
import { mount, shallow, render, Enzyme } from 'enzyme';


it('renders without crashing', () => {
  const count=0
  const turn= "X";
  const squareV= Array(9).fill(null);
  const setWon= " X";

  const newTurn = () => {
    ChangeTurns(turn, setTurn);
    setCount(count + 1);
    const sValue = squareV.slice();
    setHistory(history.concat([sValue]));
  }

  shallow( <Square setWon={setWon} num={0} newTurn={newTurn} 
            turn={turn} squareV={squareV} /> );
});

describe('Square', () => {

  it('renders Square component', () => {
    const squareV = Array(9).fill(null);

    // Replace shallow iwth mount
    const wrapper = mount(<Square squareV={squareV} />);

    // Let's check what wrong in our instance
    console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('#squareButton')).toBeDefined();
    expect(wrapper.find('#squareValue')).toBeDefined();

  });

});
