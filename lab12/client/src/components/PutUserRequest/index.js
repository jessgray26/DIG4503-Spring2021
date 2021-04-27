import Axios from 'axios';
import { useState } from 'react';

export default function PutUserRequest() {

    const [ISBN, setISBN] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(null);
    const [books, setBooks] = useState([]);

    const putBook = async () => {
        setLoading(null);

        const bookInfo = {
            ISBN: ISBN,
            title: title,
            author: author,
            description: description
        };

        await Axios.put("http://localhost:45030/books/", bookInfo)

        .then((res) => {
            setBooks([res.data])
            console.log( "Data has been received!", res.data);
            setLoading(!null);
        })
        .catch((error) => {
            console.log(error);
            setLoading(null);
        });
    };

    const renderPutBooks = () => {
        return books.map((book, key) => {
            return (
                <div key={key}>
                    You sent the following PUT request.
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
            <input type="text" placeholder="ISBN..." onChange={(event) => {setISBN(event.target.value);}} /><br></br>
            <input type="text" placeholder="Title..." onChange={(event) => {setTitle(event.target.value);}} /><br></br>
            <input type="text" placeholder="Author..." onChange={(event) => {setAuthor(event.target.value);}} /><br></br>
            <input type="text" placeholder="Description..." onChange={(event) => {setDescription(event.target.value);}} /><br></br>
            <button onClick={() => {putBook()}}>Put</button>
            {
                (loading === !null) ? (
                    <div>
                        <p>{renderPutBooks()}</p>
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