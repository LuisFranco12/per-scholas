import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Snakes</h1>
            <ul>
                {props.snakes.map((snake, index) => 
                    <li>
                        <a href={`/snakes/${index}`}><strong>{snake.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index