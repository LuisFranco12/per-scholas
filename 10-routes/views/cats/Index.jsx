import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Cats</h1>
            <ul>
                {props.cats.map((cat, index) => 
                    <li>
                        <a href={`/cats/${index}`}><strong>{cat.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index