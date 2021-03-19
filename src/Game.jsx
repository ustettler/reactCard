import * as React from 'react';
import PropTypes from 'prop-types';

import './Games.css';
import Card from './Card.jsx';
import Animal from './Animal';
import update from 'immutability-helper';
export default class Games extends React.Component {
    static defaultProps = {
        title: 'Supertrumpf',
    };

    static propTypes = {
        title: PropTypes.string,
    };

    state = {
        selectProperty: '',
        playerTurn: true,
        player: [new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40)],
        computer : [ new Animal('Nashorn', 'placeholder.png', 1, 9, 2300, 50, 1, 50)],
        };

    getSelectPropertyHandler() {
        return property =>
        this.setState((state) =>
        update(state, { selectProperty: { $set: property}}),
        );
    }

    render(){
     const { playerTurn, player, computer, selectProperty } = this.state;
    return (
     <div>
     <h1>{this.props.title}</h1>
     <div className="info">
         {playerTurn ? 'Du bist' : 'Der Computer ist'} an der Reihe
     </div>
     <div className="cards">
         <Card
            animal={player[0]}
            uncovered={playerTurn}
            selectedProperty={selectProperty}
            onSelectProperty={this.getSelectPropertyHandler()}
            />
        <Card
            animal={computer[0]}
            uncovered={!playerTurn}
            selectedProperty={selectProperty}
        />
     </div>
     </div>
    );
    }
}
