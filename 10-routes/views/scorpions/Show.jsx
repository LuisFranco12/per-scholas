import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.scorpion.name}</h1>
            <h2>Number of Legs: {props.scorpion.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.scorpion.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;