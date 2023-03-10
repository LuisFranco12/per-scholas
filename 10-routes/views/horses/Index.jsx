import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Horses</h1>
            <ul>
                {props.horses.map((horse, index) => 
                    <li>
                        <a href={`/horses/${index}`}><strong>{horse.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index