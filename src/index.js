import React from 'react';
import ReactDOM from 'react-dom';
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-info">
            <div>{"Hello Sanjana"}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
    
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );