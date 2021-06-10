import React from 'react';
// import { Component } from 'React';
import Pokecard from "./Pokecard";
import './styles/Pokedex.scss';

class Pokedex extends React.Component {

    checkZero(id) {
        return String(id).length === 1 ? `00${id}` :
            String(id).length === 2 ? `0${id}` :
                id;
    }

    getUrl(id) {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.checkZero(id)}.png`
    }

    render() {
        const hand = this.props.pokemon.map(p => {
            return (
                <Pokecard
                    id={p.id}
                    name={p.name}
                    img={this.getUrl(p.id)}
                    type={p.type}
                    exp={p.base_experience}
                />
            )
        });
        const checkWin = (isWinner) => {
            if (isWinner) {
                return <h2 className="Pokedex__winner">Winning Hand</h2>
            }
            return <h2 className="Pokedex__lose">Loosing Hand</h2>
        }

        return (
            <article className="Pokedex">
                {checkWin(this.props.isWinner)}
                <p className="Pokedex__sum">Total experience: {this.props.sum}</p>
                <div className="Pokedex__hand">
                    {hand}
                </div>

            </article>
        )
    }
}

export default Pokedex;
