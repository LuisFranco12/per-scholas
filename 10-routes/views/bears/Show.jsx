import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.bear.name}</h1>
            <h2>Number of Legs: {props.bear.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.bear.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;