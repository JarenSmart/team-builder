import React from "react";
import "./Team.css";

const Team = props => {
  console.log(props);
  return (
    <div className="team-list">
      {props.team.map(member => (
        <div className="card-wrapper">
          <div className="member" key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
