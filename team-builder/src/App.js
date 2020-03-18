import React, { useState } from "react";
import Team from "./Team";
import TeamForm from "./TeamForm";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  // const [memberEdit, setMemberEdit] = useState([])

  const addMemberHandler = newMember => {
    setTeam([...team, newMember]);
    //updating state
  };

  //EDIT BUTTON
  // const editMember = editMember => {
  //   setMemberEdit([...memberEdit, editMember]);
  //   //updating state when edit button is clicked.
  // }

  return (
    <div className="App">
      <div className="Header">
        <TeamForm addMember={addMemberHandler} />
        <Team team={team} />
      </div>
    </div>
  );
}

export default App;
