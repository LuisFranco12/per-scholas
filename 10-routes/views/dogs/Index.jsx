import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Dogs</h1>
            <ul>
                {props.dogs.map((dog, index) => 
                    <li>
                        <a href={`/dogs/${index}`}><strong>{dog.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index