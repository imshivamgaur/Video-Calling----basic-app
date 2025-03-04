import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

const LobbyScreen = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    room: "",
  });

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", userInputs);
    },
    [userInputs, socket]
  );

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    console.log(email, room);
    navigate(`/room/${room}`);
  }, []);

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email"
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
            name="room"
            value={userInputs.room}
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
