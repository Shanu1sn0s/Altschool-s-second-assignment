import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Pagination from "./pagination";

const AllUsers=()=>{
  const [users,setUsers] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(2)
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://randomuser.me/api/?results=7");
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
    return <h1>Loading๐๐๐</h1>;
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser , indexOfLastUser)

  //switch page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <div>
        <h1>These are the lists of All users</h1>
      </div>
      <br />
      <div classname="card">
        {currentUsers.map((user) => (
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
        <Pagination usersPerPage={usersPerPage} totalUsers = {users.length}  paginate = {paginate}/>
      </div>
      

      <Outlet />
    </div>
  )
}
export default AllUsers