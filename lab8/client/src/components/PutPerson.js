import Axios from 'axios';
import { useState } from 'react';

export default function PutPerson() {
    const [additionalPerson, setadditionalPerson] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);

    const addPerson = (person) => {
        Axios.put("http://localhost:45030/people/" + person)
        .then(response => {
            setLoading(false)
            console.log(response.data);
        })
        .catch(error => {
            setLoading(true)
            setErrorMessage("Person not added!");
            console.log("Error " + error)
        });
    };

    return (
        <div className="Addition">
            <input type="text" onChange={(event) => setadditionalPerson(event.target.value)} />
            <button onClick={() => addPerson(additionalPerson)}>Add Person</button>

            {
                (loading === false) ? (<div><p></p></div>) 
                : 
                (<div style={{color: "red"}} className="error"> {errorMessage} </div>) 
            }

            {
                (loading === true) ? (<div><p></p></div>)
                : 
                (<div><p>Person successfully added to array!</p></div>) 
            }
        </div>
    );
}