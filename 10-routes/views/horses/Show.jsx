import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.horse.name}</h1>
            <h2>Number of Legs: {props.horse.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.horse.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;