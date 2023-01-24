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
      <div>
        <hr></hr>
        <h4 className="alert-heading">
          <i>
            Map <i className="fa-solid fa-code-branch"></i> Example
          </i>
        </h4>
        <hr className="mb-0"></hr>
        <div className="highlight mb-0">
          <p></p>
          <ul>
            <li> </li>
          </ul>
        </div>
      </div>
      <div className="card d-flex">
        {users.map((people) => {
          const {
            id,
            name,
            username,
            email,
            address,
            website,
            phone,
            company,
          } = people;
          return (
            <div className="col-4">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body" key={id}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{username}</p>
                <a href="#" className="btn btn-primary">
                  {phone}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Map;
