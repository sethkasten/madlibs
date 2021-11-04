import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/">GC Mad Libs</Link>
      </h1>
      <ul>
        <li>
          <Link to="/stories">See Saved Stories</Link>
        </li>
        <li>
          <Link to="/create-story">Create a New Story</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
