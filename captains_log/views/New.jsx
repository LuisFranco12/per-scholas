import React from 'react'
const New = () => {
    return ( 
        <div>
            <form action="/logs" method="POST">
                <label htmlFor="title">Title:</label><br />
                <input type="text" name="title" /><br />

                <label htmlFor="entry">Entry:</label><br />
                <textarea id='ety' name="entry"/><br />

                <label htmlFor="ship">Is ship broken?</label>
                <input type="checkbox" id="brkn" name="shipIsBroken"/><br />

                <input type="submit" id="sbmt" />
            </form>
        </div>
     );
}
 
export default New;