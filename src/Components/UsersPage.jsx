import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [user, setUsers] = userState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);
  return (
    <div>
      <h1>Users Page</h1>
      {UsersPage.map((user) => (
        <Link to={`users/${user.id}`}>
          <li>{user.name}</li>{" "}
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
