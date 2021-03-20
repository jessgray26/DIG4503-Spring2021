import Axios from 'axios';
import { useState } from 'react';

export default function SearchPerson() {
  const [personSearch, setPersonSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
    const searched = (names) => {
        Axios.get("http://localhost:45030/search/" + names)
        .then(res => {
          console.log(res.data);
          setSearchResults(res.data.names);
        })

        .catch(error => {
          console.log("Error " + error);
        });
    };

    return (
      <div className="Searching">
        <input type="text" onChange={(event) => setPersonSearch(event.target.value)} />
        <button onClick={() => searched(personSearch)}>Search Person</button>
        {
          searchResults.map((value, index) => {
            return <p key={index}>{value}</p>
          })
        }
      </div>
    )
}
