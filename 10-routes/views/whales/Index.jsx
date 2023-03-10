import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Whales</h1>
            <ul>
                {props.whales.map((whale, index) => 
                    <li>
                        <a href={`/whales/${index}`}><strong>{whale.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index