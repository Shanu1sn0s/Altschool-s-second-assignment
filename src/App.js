import React  from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./index.css";
import Female from "./Pages/female";
import AllUsers from "./Pages/allUsers";
import Links from "./Pages/DefaultLinks";
import MaleUsers from "./Pages/male";


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
