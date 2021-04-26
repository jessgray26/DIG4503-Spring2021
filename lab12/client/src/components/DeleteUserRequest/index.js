import Axios from 'axios';
import { useState } from 'react';

export default function GetUserRequest() {

    const [ISBN, setISBN] = useState("");
    const [loading, setLoading] = useState(null);

    const deleteBook = async () => {
        setLoading(null);
        const getInfo = {
            params: {
                ISBN: ISBN
            }
        };

        await Axios.delete("http://localhost:45030/books/", getInfo)
        .then((res) => {
            console.log(res);
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
            <input type="text" placeholder="Enter ISBN..." onChange={(event) => {setISBN(event.target.value);}} /><br></br>
            <button onClick={() => {deleteBook()}}>Delete</button>
            {
          (loading !== null) ? (
            <div>
                <p><u>DELETE request has been sent:</u> <br></br>
                    Title: {ISBN}</p>
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