import { createContext } from "react";
import Story from "../models/Story";

interface StoriesContextModel {
  storiesArray: Story[];
  addStory: (story: Story) => void;
}

const defaultValues: StoriesContextModel = {
  storiesArray: [],
  addStory: () => {},
};

const StoriesContext = createContext(defaultValues);

export default StoriesContext;
