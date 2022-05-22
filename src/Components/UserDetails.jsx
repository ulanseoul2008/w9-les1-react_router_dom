import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = userState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json().then((data) => setUser(data))
    );
  }, [id]);

  return (
    <div>
      <h1>User details</h1>
      {user && (
        <>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <span>{user.phone}</span>
        </>
      )}
    </div>
  );
};

export default UserDetails;
