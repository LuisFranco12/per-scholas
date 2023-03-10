import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Scorpions</h1>
            <ul>
                {props.scorpions.map((scorpion, index) => 
                    <li>
                        <a href={`/scorpions/${index}`}><strong>{scorpion.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index