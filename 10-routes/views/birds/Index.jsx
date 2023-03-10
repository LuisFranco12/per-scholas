import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Birds</h1>
            <ul>
                {props.birds.map((bird, index) => 
                    <li>
                        <a href={`/birds/${index}`}><strong>{bird.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index