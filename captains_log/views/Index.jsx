import React from 'react'

const styles = {
    fontSize: '1.2rem',
}

const Index = (props) => {
    return ( 
        <div>
            <ul>
                {
                    props.logs.map((log, index) => (
                        <li key={index}>
                            <a style={styles} href={`/logs/${log._id}`}>{log.title}</a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <button>Delete</button>
                            </form>
                            <form action={`/logs/${log._id}/edit`} method="GET">
                                <button>Edit</button>
                            </form>
                        </li>
                    ))
                }
            </ul>
            <a style={styles} href="/logs/new">Add a log... </a>
        </div>
     );
}
 
export default Index;