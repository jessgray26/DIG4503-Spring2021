import Axios from 'axios';
import { useState } from 'react';

export default function PutUserRequest() {

    const [ISBN, setISBN] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(null);

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
            setISBN(ISBN);
            setTitle(title);
            setAuthor(author);
            setDescription(description);
            console.log( "Data has been received!", res.data);
            setLoading(!null);
        })
        .catch((error) => {
            console.log(error);
            setLoading(null);
        });

    };

    return (
        <div>
            <input type="text" placeholder="ISBN..." onChange={(event) => {setISBN(event.target.value);}} /><br></br>
            <input type="text" placeholder="Title..." onChange={(event) => {setTitle(event.target.value);}} /><br></br>
            <input type="text" placeholder="Author..." onChange={(event) => {setAuthor(event.target.value);}} /><br></br>
            <input type="text" placeholder="Description..." onChange={(event) => {setDescription(event.target.value);}} /><br></br>
            <button onClick={() => {putBook()}}>Put</button>
            {
                (loading !== null) ? (
                    <div>
                        <p><u>PUT request has been sent:</u><br></br> 
                            ISBN: {ISBN}, <br></br>
                            Title: {title}, <br></br>
                            Author: {author}, <br></br> 
                            Description: {description}</p>
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