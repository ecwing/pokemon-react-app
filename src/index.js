import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

function App() {
    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({});
    
    useEffect(() => {
        encounterWildPokemon()
    }, [])

    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min +1)) + min
    }

    const encounterWildPokemon = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then(response => {
            setWildPokemon(response.data);
        })
    }

    return (
        <div className="app-wrapper">
            <header>
                <h1 className="title">React Hooks</h1>
                <h3 className="subtitle">With Pokemon</h3>
            </header>

            <section className="wild-pokemon">
                <h2>Wild Encounter</h2>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} alt=""/>
            </section>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

