import { useQuery } from "@apollo/client";

import styles from "./MissionTracker.module.css";
import LoadingIndicator from "../LoadingIndicator";
import MissionTable from "../MissionTable";
import { GET_MISSIONS } from "./_gql_queries/GET_MISSIONS";

const MissionTracker = () => {

    const { data, loading, error } = useQuery(GET_MISSIONS);

    return (
        <div className={styles.missionTrackerContainer}>
            <h1 className={styles.heading}>SpaceX Mission Tracker</h1>
            {loading && <LoadingIndicator />}
            {error && 
                <p className={styles.errorText}>
                    There was an error querying the data. Please try again later.
                </p>
            }
            {data && <MissionTable missions={data?.missions}/>}
        </div>
    );
    
}

export default MissionTracker;