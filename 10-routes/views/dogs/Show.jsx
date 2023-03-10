import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.dog.name}</h1>
            <h2>Number of Legs: {props.dog.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.dog.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;