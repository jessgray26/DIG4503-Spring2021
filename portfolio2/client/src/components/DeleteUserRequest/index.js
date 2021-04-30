import Axios from "axios";
import { useState } from "react";

export default function GetUserRequest() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(null);

  const deleteBook = async () => {
    setLoading(null);
    const getInfo = {
      params: {
        username: username,
      },
    };

    await Axios.delete("http://localhost:45030/jessicagray/", getInfo)
      .then((res) => {
        console.log(res)
        console.log(res.data);
        setLoading(!null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(null);
      });
  };

  const renderDeleteTrip = () => {
    if (Object.values(username).length !== 0) {
      return "DELETE request sent";
    } else {
      return "Entry not found!";
    }
  };

  return (
    <div>
      <h2>Enter username that you want to DELETE:</h2>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br></br>
      <button
        onClick={() => {
          deleteBook();
        }}
      >
        Delete
      </button>
      {loading !== null ? (
        <div>
          <div className="deleteMessage">{renderDeleteTrip()}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
