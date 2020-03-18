import React, { useState } from "react";
import "./TeamForm.css";

const TeamForm = props => {
  const [listState, setListState] = useState({
    name: "",
    role: "",
    email: ""
  });

  const changeHandler = event => {
    setListState({
      ...listState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.addMember({
      ...listState,
      id: Date.now()
    });

    setListState({
      name: "",
      role: "",
      email: ""
    });
  };

  return (
    <div className="card">
      <h1>Team Members</h1>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name"> Name </label>{" "}
        <input
          type="text"
          name="name"
          value={listState.name}
          onChange={changeHandler}
          placeholder="Enter Name..."
        />
        <label htmlFor="role"> Role </label>{" "}
        <input
          type="text"
          name="role"
          value={listState.role}
          onChange={changeHandler}
          placeholder="Enter Role..."
        />
        <label htmlFor="email"> Email </label>{" "}
        <input
          type="text"
          name="email"
          value={listState.email}
          onChange={changeHandler}
          placeholder="Enter Email..."
        />
        <button type="submit" data-text="Add New Member!">
          Add New Member!
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
