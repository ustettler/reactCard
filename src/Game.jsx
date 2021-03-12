import * as React from 'react';

import './Games.css';
import Card from './Card';
import Animal from './Animal';

export default class Games extends React.Component {
 render(){
     const playerTurn = true;
     const player = [
         new Animal ('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40),
        ];
    const computer = [
        new Animal ('Nashorn', 'placeholder.png', 1, 9, 2300, 50, 1, 50),
    ];

 return (
     <div>
     <div className="info">
         {playerTurn ? 'Du bist' : 'Der Computer ist'} an der Reihe
     </div>
     <div className="cards">
         <Card animal={player[0]} uncovered={playerTurn} />
         <Card animal={computer[0]} uncovered={!playerTurn} />
     </div>
     </div>
    );
    }
}
