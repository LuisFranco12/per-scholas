import React from 'react'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const pokemonName = {
    textDecoration: 'underline',
}

function Show(props) {
    return (
        <div style={styles}>
            <h1>Gotta Catch 'Em All</h1>
            <h2 style={pokemonName}>{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}</h2>
            <img src={`${props.pokemon.img}.jpg`} alt={props.pokemon.name} />

            <br />
            
            <a href="/pokemon">back</a>
        </div>
    )
}

export default Show