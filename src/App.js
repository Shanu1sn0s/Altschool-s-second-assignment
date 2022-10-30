import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./index.css";
import Female from "./Pages/female";
import AllUsers from "./Pages/allUsers";
import Links from "./Pages/DefaultLinks";

const Home = () => {
  return (
    <div>
      <Links />
      <h1>Home</h1>
      <hr />
      <p>This is the Home page</p>
  
    </div>
  );
};
const About = () => {
  return (
    <>
      <div>
        <Links />
        <h1>About</h1>
        <hr />
        <p>This is the About page</p>
      </div>
    
      <Outlet />
    </>
  );
};
const Users = () => {
  return (
    <div>
      <Links />
      <h1>Users</h1>
      <hr />
      <p>This is the Users page</p>
      <br />

      <h1 className="denominations">
        <Link className="gender" to="/option/male">Male users</Link>
        <Link className="gender" to="/option/female">Female users</Link>
        <Link className="gender" to="/option/all">All users</Link>
      </h1>
     
      <Outlet />
    </div>
  );
};

//Nested

const MaleUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/?results=3&gender=male");
        const data = await res.json();
        setUsers(data.results);
        console.log(users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div>
        <h1>These are the lists of male users</h1>
      </div>
      <br />
      <div classname="card">
        {users.map((user) => (
          <div className="card" key={user.login.uuid}>
            <img className="images" src={user.picture.medium} alt="images" />
            <div className="details">
              <h1 className="names">
                {user.name.first}
                {user.name.last}
              </h1>
              <h2 className="email">{user.email}</h2>
            </div>
          </div>
        ))}
      </div>
      

      <Outlet />
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/option" element={<Users />}>
          <Route path="male" element={<MaleUsers />} />
          <Route path="female" element={<Female />} />
          <Route path="all" element={<AllUsers />} />
        </Route>
      </Routes>
   
    </div>
  );
};
export default App;
