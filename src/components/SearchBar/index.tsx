import { useState } from "react";

import styles from "./SearchBar.module.css";
import { IMission } from "../../_type_helpers/IMission";
import { ISearchBarProps } from "./_interfaces/ISearchBarProps";

const SearchBar = ({ setSortedMissions, fullMissionsList }: ISearchBarProps) => {
  
    const [topicToSearch, setTopicToSearch] = useState<string>("")
  
    const handleSearch = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      const sortedMissionsByTopic: IMission[] = [];
      fullMissionsList?.forEach(mission => {
            for (const key in mission) {
                if (mission[key as keyof IMission]?.toString().toLowerCase().includes(topicToSearch.toLowerCase())) {
                    sortedMissionsByTopic.push(mission);
                    break;
                }
            }
        })
        setSortedMissions(sortedMissionsByTopic);
    }

    const handleReset = () => {
        setTopicToSearch("");
    }
  
    return (
        <form onSubmit={handleSearch} className={styles.form} data-testid="searchBar">
            <input
              id="topicToSearch"
              data-testid="topicToSearch"
              type="text"
              value={topicToSearch}
              className={styles.input}
              onChange={(e) => setTopicToSearch(e?.target?.value)}
            />
            <button className={styles.button} type="submit">Search</button>
            <button className={styles.button} onClick={handleReset}>View All</button>
        </form>
    );
  }
  
  export default SearchBar;