import styles from "./MissionTableRow.module.css";
import { IMissionTableRowProps } from "./_interfaces/IMissionTableRowProps";

const MissionTableRow = ({ mission }: IMissionTableRowProps) => {

    return (
        <tr className={styles.row}>
            <td>{mission?.name}</td>
            <td>
                <div>{mission?.description}</div>
            </td>
            <td>{mission?.manufacturers.join(", ")}</td>
            <td>
                {mission?.website && 
                    <a 
                        href={mission?.website} 
                        className={styles.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Website
                    </a>
                }
            </td>
            <td>
                {mission?.twitter && 
                    <a 
                        href={mission?.twitter} 
                        className={styles.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                }
            </td>
            <td>
                {mission?.wikipedia && 
                    <a 
                        href={mission?.wikipedia} 
                        className={styles.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Wikipedia
                    </a>
                }
            </td>
        </tr>
    );
}

export default MissionTableRow;