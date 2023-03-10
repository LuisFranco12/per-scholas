import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.whale.name}</h1>
            <h2>Number of Fins: {props.whale.numberOfFins}</h2>
            <h2>Life Expectancy: {props.whale.LifeExpectancy}</h2>
        </div>
    )
}

export default Show;