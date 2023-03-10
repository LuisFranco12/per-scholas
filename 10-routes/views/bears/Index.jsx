import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Bears</h1>
            <ul>
                {props.bears.map((bear, index) => 
                    <li>
                        <a href={`/bears/${index}`}><strong>{bear.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index