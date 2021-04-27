import Axios from 'axios';
import { useState } from 'react';

export default function GetUserRequest() {

    const [ISBN, setISBN] = useState("");
    const [loading, setLoading] = useState(null);
    const [search, setSearch] = useState([]);

    const getBook = async () => {
        setLoading(null);

        const getInfo = {
            params: {
                ISBN: ISBN,
            },
        };
        
        await Axios.get("http://localhost:45030/books/", getInfo)
        .then((res) => {
            setSearch([res.data])
            console.log( "Data has been found!", res.data);
            setLoading(!null);
        })
        .catch((error) => {
            console.log(error);
            setLoading(null);
        });
    };

    const renderGetBooks = () => {
      return search.map((book, key) => {
          return (
              <div key={key}>
                  <u>GET request received:</u>
                  <p>ISBN: {book.ISBN}</p>
                  <p>Title: {book.title}</p>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
              </div>
          )
      })
    }

    return (
        <div>
            <input type="text" placeholder="Search by ISBN..." onChange={(event) => {setISBN(event.target.value);}} /><br></br>
            <button onClick={() => {getBook()}}>Get</button>
        {
          (loading !== null) ? (
            <div>
              {renderGetBooks()}
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