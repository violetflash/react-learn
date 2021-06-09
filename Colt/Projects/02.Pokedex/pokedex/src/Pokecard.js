import React, { Component } from 'react';
import './styles/Pokecard.scss';

class Pokecard extends Component {
    render() {
        return (
            <article className="Pokecard">
                <header className="Pokecard__header">
                    <h3 className="Pokecard__title">{this.props.name}</h3>
                </header>
                <figure className="Pokecard__figure">
                    <img className="Pokecard__img" src={this.props.img} alt={this.props.name}/>
                </figure>
                <div className="Pokecard__body">
                    <p className="Pokecard__type">type: {this.props.type}</p>
                    <p className="Pokecard__exp">EXP: {this.props.exp}</p>
                </div>
            </article>
        )
    }
}

export default Pokecard;
