import React from 'react'
import { options } from '../routes/flightRoutes';

const Show = (props) => {

    let choices = [
        'SAN',
        "AUS",
        "DAL",
        "LAX",
        "SEA"
      ];
      let index
      props.flight.destinations.map(item => {
        index = choices.findIndex(choice => choice.includes(item.airport))
        choices.splice(index, 1)
    })
    return ( 
        <div>
            <h1>
                {props.flight.airline}
            </h1>
            <p>
                flights: {props.flight.flights}
            </p>
            <p>
                departs: {props.flight.departsDate}
            </p>
            <p>
                airport: {props.flight.airport}
            </p>

            <form action={`/flights/${props.flight._id}/destinations`} method="POST">
                <label htmlFor="date">Time of Arrival:</label> <br />
                <input type="datetime-local" id="date" name="arrival" value={props.departsDate} /><br /><br />
                {
                    choices.length ?
                    <>
                        <label htmlFor="airport">Airport:</label><br />
                        <select style={{width: "80px"}} name="airport">
                            {
                                choices.map(item => (
                                <option>{item}</option>
                                ))
                            } 
                        </select><br /><br />
                        <button>Add</button> <br /> <br />
                    </>
                    : ''
                }
            </form>

            {
                        props.flight.destinations.length ?
                        <>
                            <div style={{textDecoration: 'underline'}}>Destinations:</div>
                            <p style={{margin: 0}}>{props.flight.destinations.map((item, i) => {
                               return  <div key={i}>
                                    <div>{item.airport}</div>
                                    <div>{item.arrival.toString()}</div>
                                    <br />
                                </div>
                            }
                            )}</p>
                        </>
                        : ''
                }

            <form action={`/flights/${props.flight._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>
           
           <a href="/flights">back</a>
        </div>
     );
}
 
export default Show;