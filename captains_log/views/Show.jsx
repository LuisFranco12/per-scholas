import React from 'react'

const Show = (props) => {
    return ( 
        <div>
            <h1>{props.log.title}</h1>
            <p>{props.log.entry}</p>
            <p>
                {
                props.log.shipIsBroken ? 
                    'The Ship is in rough shape, I have to fix it fast!' : 'The Ship is in great condition!'
                }
            </p>
            <p>Date: {props.date}</p>
            <br />

            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />

            <form action={`/logs/${props.log._id}/edit`} method="GET">
                <button>Edit</button>
            </form>
            <br />
            <a href="/logs">Back</a>
            <br />
        </div>
     );
}
 
export default Show;