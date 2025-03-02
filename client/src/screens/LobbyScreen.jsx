import { useState } from "react";

const LobbyScreen = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    roomId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
    setUserInputs({
      email: "",
      roomId: "",
    });
  };

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email "
            name="email"
            value={userInputs.email}
            onChange={(e) =>
              setUserInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="room">Room Id</label>
          <input
            type="number"
            id="room"
            name="roomId"
            value={userInputs.roomId}
            onChange={(e) =>
              setUserInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <button>Join</button>
        </div>
      </form>
    </div>
  );
};

export default LobbyScreen;
