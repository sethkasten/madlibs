import { useContext } from "react";
import { useParams } from "react-router";
import StoriesContext from "../context/StoriesContext";
import "./ViewStoryRoute.css";

interface RouteParams {
  id: string;
}

const ViewStoryRoute = () => {
  const id = useParams<RouteParams>().id;

  const { storiesArray } = useContext(StoriesContext);

  const i: number = storiesArray.findIndex((item) => item.id === parseInt(id));

  return (
    <div className="ViewStoryRoute">
      <p>
        This time every year I {storiesArray[i].word1} all the time because I
        get really excited thinking about holiday {storiesArray[i].word2}!
        That’s why I was sitting at the {storiesArray[i].word3}— I was really
        hoping a {storiesArray[i].word4} would come by and give me at least{" "}
        {storiesArray[i].word5} pieces of holiday {storiesArray[i].word6}!
      </p>
    </div>
  );
};

export default ViewStoryRoute;
