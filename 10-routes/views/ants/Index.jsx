import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Ants</h1>
            <ul>
                {props.ants.map((ant, index) => 
                    <li>
                        <a href={`/ants/${index}`}><strong>{ant.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index