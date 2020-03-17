import React, { useState } from "react";

const TeamForm = props => {
  const [listState, setListState] = useState({
    name: "",
    role: "",
    favoriteColor: ""
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
        favoriteColor: ""
    });
  };

  return (
      <form onSubmit={formSubmitHandler}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            name="name"
            value={listState.name}
            onChange={changeHandler}
            placeholder="What's your new members name?"
          />
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            value={listState.role}
            onChange={changeHandler}
            placeholder="What's your new members role?"
          />
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="text"
            name="favoriteColor"
            value={listState.favoriteColor}
            onChange={changeHandler}
            placeholder="What's your new members favorite color?"
          />
          <button type="submit">Add new member!</button>
      </form>
  )
};

export default TeamForm;
