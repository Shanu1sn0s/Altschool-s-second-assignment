import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="default_links">
      <ul>
        <li>
          <Link className="links" to="/">Home page</Link>
        </li>
        <li>
          <Link className="links" to="/about">About page</Link>
        </li>
        <li>
          <Link className="links" to="/option">Users page</Link>
        </li>
      </ul>
    </div>
  );
};
export default Links