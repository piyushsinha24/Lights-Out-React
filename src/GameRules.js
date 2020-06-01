import React, { Component } from 'react';
import './GameRules.css';

class GameRules extends Component {
    showHint(event){
        if(event.keyCode === 72) {
          // when H is pressed
          document.getElementById("hints").style.display = 'block';
          document.getElementById("rules").style.display = 'none';
        }
      }
      componentDidMount(){
        document.addEventListener("keydown", this.showHint, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.showHint, false);
      }
    render() {
        return (
            <div className='GameRules'>
                <div id='rules'>
                    <h1>Rules:</h1>
                    <hr/>
                    <p>
                        Lights Out is a puzzle game released by Tiger Electronics in 1995. The game consists of a 5 x 5 grid of lights that are either on or off. Pressing any light will toggle it and its adjacent lights (non-diagonal). The goal is to switch all the lights off.
                    </p>
                    <h3>Press H for hints.</h3>
                </div>
                <div id='hints'>
                    <h1>Hints:</h1>
                    <hr/>
                    <ul>
                        <li>
                            For each light on row 1, press the cell beneath it on row 2 to turn the light off. This way row 1 is completely unlit.
                        </li>
                        <li>
                            Repeat the above step for rows 2-4, so that now you only have lights on row 5. This is called "chasing the lights".
                        </li>
                        <li>
                            Match your bottom row (i.e. row 5) with the table given below and lit the topmost row (i.e. row 1) cells as shown in the table. (1 -> lit | 0 -> Unlit)
                            <table id='hints-table'>
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
                        </li>
                        <li>
                            Repeat "chasing the lights" down and it will be magically solved.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GameRules;