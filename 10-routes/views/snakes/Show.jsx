import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.snake.name}</h1>
            <h2>Number of Legs: {props.snake.numberOfLegs} {':('}</h2>
            <h2>Life Expectancy: {props.snake.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;