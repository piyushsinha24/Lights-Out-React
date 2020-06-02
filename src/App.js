import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  showGamePlay() {
    document.getElementById('rules').style.display='block';
    document.getElementById('rules').scrollIntoView();
  }
  showTutorial() {
    document.getElementById('solution').style.display='block';
    document.getElementById('solution').scrollIntoView();
  }
  render() {
    return (
      <div className='App'>
        {/* <GameRules /> */}
        <div className='App-Gameplay'>
        <button className='btn' onClick={this.showGamePlay}>gameplay</button>
        <button className='btn' onClick={this.showTutorial}>solution</button>
        </div>
        <Board />
        <div id='rules'>
          <h1>Gameplay</h1>
          <hr/>
          <p>
            Lights Out is a puzzle game released by Tiger Electronics in 1995. The game consists of a 5 x 5 grid of lights that are either on or off. Pressing any light will toggle it and its adjacent lights (non-diagonal). The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible. 
          </p>
          <p>
            If a light is on, it must be toggled an odd number of times to be turned off. If a light is off, it must be toggled an even number of times (including none at all) for it to remain off. Several conclusions are used for the game's strategy. Firstly, the order in which the lights are pressed does not matter, as the result will be the same. Secondly, in a minimal solution, each light needs to be pressed no more than once, because pressing a light twice is equivalent to not pressing it at all.
          </p>
          <hr/>
        </div>
        <div id='solution'>
          <h1>Solution</h1>
          <hr />
          <p>
            For each light on row 1, press the cell beneath it on row 2 to turn the light off. This way row 1 is completely unlit. Repeat the above step for rows 2-4, so that now you only have lights on row 5. This is called "chasing the lights". Match your bottom row (i.e. row 5) with the table given below and lit the topmost row (i.e. row 1) cells as shown in the table. (1 -> lit | 0 -> Unlit)
          </p>    
             <table id='solution-table'>
                <thead>
                  <tr>
                    <th>Bottom</th>
                    <th>Top</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 0 0 0 1</td>
                    <td>1 1 0 0 0</td>
                  </tr>
                  <tr>
                    <td>0 1 0 1 0</td>
                    <td>1 0 0 1 0</td>
                  </tr>
                  <tr>
                    <td>1 1 1 0 0</td>
                    <td>0 1 0 0 0</td>
                  </tr>
                  <tr>
                    <td>0 0 1 1 1</td>
                    <td>0 0 0 1 0</td>
                  </tr>
                  <tr>
                    <td>1 0 1 1 0</td>
                    <td>0 0 0 0 1</td>
                  </tr>
                  <tr>
                    <td>0 1 1 0 1</td>
                    <td>1 0 0 0 0</td>
                  </tr>
                  <tr>
                    <td>1 1 0 1 1</td>
                    <td>0 0 1 0 0</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Repeat "chasing the lights" down and it will be magically solved. Read about Gaussian Elimination for solving in fewer steps.
              </p>
        </div>
      </div>
    );
  }
}

export default App;
