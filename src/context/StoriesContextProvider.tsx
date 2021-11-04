import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [storiesArray, setStoriesArray] = useState<Story[]>([
    {
      id: 1,
      author: "Seth",
      word1: "jump",
      word2: "dogs",
      word3: "park",
      word4: "great-aunt",
      word5: "1432",
      word6: "pizza",
    },
    {
      id: 2,
      author: "Jeff",
      word1: "sing",
      word2: "cats",
      word3: "sidewalk",
      word4: "great-uncle",
      word5: "9584",
      word6: "cake",
    },
    {
      id: 3,
      author: "Travis",
      word1: "run",
      word2: "frogs",
      word3: "Paris",
      word4: "half-step-cousin",
      word5: "8798468465",
      word6: "burrito",
    },
    {
      id: 4,
      author: "Drew",
      word1: "walk",
      word2: "elephants",
      word3: "hole",
      word4: "sister-once-removed",
      word5: "2.6655",
      word6: "ramen",
    },
  ]);

  const addStory = (story: Story): void => {
    setStoriesArray((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ storiesArray, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
