import React from 'react'

const Edit = (props) => {
    return ( 
        <div>
                <h1>Edit Log</h1>
                <form action={`/logs/${props.log._id}?_method=PUT`} method='POST'>
                    <label htmlFor="title">update Title:</label><br />
                    <input type="text" id="title" name="title" value={props.log.title}/><br /><br />

                    <label htmlFor="clr">update Log:</label><br />
                    <textarea id="ety" name='entry' value={props.log.entry}/><br /><br />

                    <label htmlFor="rdy">update ship condition:</label>
                    <input type="checkbox" id="rdy" name='shipIsBroken' defaultChecked={props.log.shipIsBroken}/><br /><br />

                    <button>Submit</button>
                    <br />
                </form>
                <br />
                <form action="/logs" method="GET">
                        <button>Cancel</button>
                </form>
            </div>
     );
}
 
export default Edit;