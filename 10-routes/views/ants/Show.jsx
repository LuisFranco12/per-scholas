import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.ant.name}</h1>
            <h2>Number of Legs: {props.ant.numberOfLegs}</h2>
            <h2>Life Expectancy: {props.ant.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;