import Axios from 'axios';
import { useState } from 'react';

export default function GetUserRequest() {

    const [ISBN, setISBN] = useState([]);
    const [loading, setLoading] = useState(null);

    const getBook = async () => {
        setLoading(null);
        const getInfo = {
            params: {
                ISBN: ISBN
            }
        };
        
        await Axios.get("http://localhost:45030/books/", getInfo)
        .then((res) => {
            console.log(ISBN);
            console.log(res.data);
            setLoading(!null);
        })
        .catch((error) => {
            console.log(error);
            setLoading(null);
        });
    };

    return (
        <div>
            <input type="text" placeholder="Search by ISBN..." onChange={(event) => {setISBN(event.target.value);}} /><br></br>
            <button onClick={() => {getBook()}}>Get</button>
        {
          (loading !== null) ? (
            <div>
              <p><u>GET request has been sent for:</u> <br></br>
                  ISBN: {ISBN}</p>
            </div>
          ) : (
            <div>
              <p>Loading . . .</p>
            </div>
          ) 
        }
        </div>
    )
}