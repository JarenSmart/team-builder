import React, { useState } from "react";
import Team from "./Team";
import TeamForm from "./TeamForm";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Jackson McJackson",
      role: "web developer",
      favoriteColor: "Red"
    }
  ]);

  const addMemberHandler = newMember => {
    setTeam([...team, newMember]);
    //updating state
  };

  return (
    <div>
      <h1>Team Members</h1>
      <Team team={team} />
      <TeamForm addMember={addMemberHandler} />
    </div>
  );
}

export default App;
