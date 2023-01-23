import React, { useState, useEffect } from 'react';
const userList = 'https://jsonplaceholder.typicode.com/users';
const Map = () => {
  const [users, setUsers] = useState([]);
  const featchData = async () => {
    try {
      await fetch(userList);
      const response = await fetch(userList);
      const users = await response.json();
      setUsers(users);
      console.log(users);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  useEffect(() => {
    featchData();
    console.log('Hemant');
  }, []);
  return (
    <>
      Map
      {users.map((people) => {
        const { id, name, username, email, address, website, phone, company } =
          people;
        <div classname="card" style={{ width: '18rem' }}>
          // <img src="..." classname="card-img-top" alt="..." />
          <div classname="card-body">
            <h5 classname="card-title">{name}</h5>
            <p classname="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" classname="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>;
      })}
    </>
  );
};
export default Map;
