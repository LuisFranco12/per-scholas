import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.cat.name}</h1>
            <h2>Number of Legs: {props.cat.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.cat.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;