import React, {Component} from 'react';
import Pokedex from './Pokedex';
import './styles/Pokegame.scss';

class Pokegame extends Component {
    static defaultProps = {
        pokelist: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render() {


        const hand1 = [];
        const hand2 = [ ...this.props.pokelist ];
        while (hand1.length < hand2.length ) {
            const randIdx = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2.splice(randIdx, 1)[0]);
        }

        return (
            <div>
                <section className="Pokegame">
                    <h1 className="Pokegame__title">Pokedex</h1>
                    <article className="Pokegame__hand">
                        <Pokedex pokemon={hand1}/>
                    </article>
                    <article className="Pokegame__hand">
                        <Pokedex pokemon={hand2}/>
                    </article>
                </section>
            </div>
        )
    }
}

export default Pokegame;