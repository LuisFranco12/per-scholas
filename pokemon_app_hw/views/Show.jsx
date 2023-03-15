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
            <img src={`${props.pokemon.image}`} alt={props.pokemon.name} />

            <br />
            <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
                    <button>Delete</button>
                </form>
            <br />
            <br />

            <a href="/pokemon">back</a>
        </div>
    )
}

export default Show