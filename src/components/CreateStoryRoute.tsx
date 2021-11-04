import { FormEvent, useContext, useState } from "react";
import "./CreateStoryRoute.css";
import StoriesContext from "../context/StoriesContext";
import { Link, useHistory } from "react-router-dom";

const CreateStoryRoute = () => {
  const { storiesArray, addStory } = useContext(StoriesContext);
  const [id, setId] = useState(storiesArray.length + 1);
  const [author, setAuthor] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");
  const [word6, setWord6] = useState("");

  const history = useHistory();

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    addStory({
      id,
      author,
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
    });
    history.push("/stories/");
  };

  return (
    <form className="CreateStoryRoute" onSubmit={submitHandler}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="verb">Verb</label>
      <input
        type="text"
        name="verb"
        id="verb"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
      />
      <label htmlFor="plural-noun">Plural noun</label>
      <input
        type="text"
        name="plural-noun"
        id="plural-noun"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <label htmlFor="place">Place</label>
      <input
        type="text"
        name="place"
        id="place"
        value={word3}
        onChange={(e) => setWord3(e.target.value)}
      />
      <label htmlFor="family-relative">Family relative</label>
      <input
        type="text"
        name="family-relative"
        id="family-relative"
        value={word4}
        onChange={(e) => setWord4(e.target.value)}
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={word5}
        onChange={(e) => setWord5(e.target.value)}
      />
      <label htmlFor="food-item">Food item</label>
      <input
        type="text"
        name="food-item"
        id="food-item"
        value={word6}
        onChange={(e) => setWord6(e.target.value)}
      />
      <label htmlFor="id">Id</label>
      <input
        type="number"
        name="id"
        id="id"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
        disabled
      />
      <button>Save</button>
    </form>
  );
};

export default CreateStoryRoute;
