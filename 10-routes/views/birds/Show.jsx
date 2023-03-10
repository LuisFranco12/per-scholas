import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.bird.name}</h1>
            <h2>Number of Legs: {props.bird.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.bird.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;