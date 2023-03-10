import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.arachnid.name}</h1>
            <h2>Number of Legs: {props.arachnid.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.arachnid.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;