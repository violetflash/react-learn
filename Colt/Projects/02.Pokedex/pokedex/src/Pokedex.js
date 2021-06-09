import React from 'react';
// import { Component } from 'React';
import Pokecard from "./Pokecard";
import './styles/Pokedex.scss';

class Pokedex extends React.Component {
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

    checkZero(id) {
        return String(id).length === 1 ? `00${id}` :
            String(id).length === 2 ? `0${id}` :
                id;
    }

    getUrl(id) {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.checkZero(id)}.png`
    }

    shuffle(arr) {
        //loop over array backwards
        for (let i = arr.length - 1; i > 0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap in place (shorthand way of swapping elements using destructuring
            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }

    render() {
        console.log(this.props.pokemon);
        return (
            <article className="Pokedex">
                {this.props.pokemon.map(p => <Pokecard id={p.id} name={p.name} img={this.getUrl(p.id)} type={p.type} exp={p.base_experience}/>)}
            </article>
        )
    }


}

export default Pokedex;
