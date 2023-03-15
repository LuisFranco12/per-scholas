import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

const Index = (props) => {
    return (
        <>
            <h1 style={myStyle}>See All The Pokemon</h1>
            <ul>
                {
                    props.pokemon.map((pokemon, index) => (
                        <li key={index}>
                           <a href={`/pokemon/${pokemon._id}`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a>
                        </li>
                        
                    ))
                }
            </ul>
            <br />
            <a href="/pokemon/new">Add New Pokemon</a>
        </> 
     );
}
 
export default Index;