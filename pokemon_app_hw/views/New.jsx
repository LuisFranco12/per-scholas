import React from 'react'
const New = () => {
    return ( 
        <div>
                <h1>Add Pokemon</h1>
                <form action='/pokemon' method='POST'>
                    <label htmlFor="nme">Name:</label><br />
                    <input type="text" id="nme" name="name" /><br /><br />

                    <label htmlFor="img">Image Address:</label><br />
                    <input type="text" id="img" name='image' /><br /><br />

                    <button>Submit</button>
                    <br />
                    <a href="/pokemon">Back</a>

                </form>
            </div>
     );
}
 
export default New;