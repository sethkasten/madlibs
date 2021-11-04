import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { storiesArray } = useContext(StoriesContext);

  return (
    <div className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul>
        {storiesArray.map((story) => (
          <li>
            <Link to={`/stories/${story.id}`}>Mad Lib by: {story.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
