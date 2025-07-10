import { Bonjour } from "../../modules/Bonjour/Bonjour";
import { Part1OurStory } from "./Part1OurStory/Part1OurStory";
import { Part2OurStory } from "./Part2OurStory/Part2OurStory";
import styles from "./OurStoryStyles/OurStory.module.scss"
import { Part3OurStory } from "./Part3OurStory/Part3OurStory";

export const OurStory = () => {
  return (
    <div className={styles.OurStory}>
      <Part1OurStory/>
      <Part2OurStory/>
      <Part3OurStory/>
      <Bonjour/>
    </div>
  );
};
