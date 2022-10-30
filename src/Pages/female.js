import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Female = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/?results=3&gender=female");
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
   <p>These are the details of female users</p>
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
   <Outlet/>
  </div>
  
  );
};

export default Female