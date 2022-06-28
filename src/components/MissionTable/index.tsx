import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState, useEffect } from "react";

import styles from "./MissionTable.module.css";
import { IMissionTableProps } from "./_interfaces/IMissionTableProps";
import { IMission } from "../../_type_helpers/IMission";
import TableRow from "../MissionTableRow";
import SearchBar from "../SearchBar";

const MissionTable = ({ missions }: IMissionTableProps) => {

    const [sortedMissions, setSortedMissions] = useState<IMission[]>([]);
    const [fullMissionsList, setFullMissionsList] = useState<IMission[]>([]);

    const tableHeadings: string[] = [
        "Name",
        "Description",
        "Manufacturers",
        "Website",
        "Twitter",
        "Wikipedia"
    ];

    useEffect(() => {
        setFullMissionsList(missions);
        setSortedMissions(missions);
    }, [missions]);

    const handleSort = (keyToSort: string) => {
        let newlySortedMissions: IMission[] = [...sortedMissions];
        newlySortedMissions.sort(function(a, b) {
            return (a[keyToSort as keyof IMission] < b[keyToSort as keyof IMission]) 
                ? -1 : (a[keyToSort as keyof IMission] > b[keyToSort as keyof IMission]) ? 1 : 0;
        });
        setSortedMissions(newlySortedMissions);
    }

    return (
        <div>
            <SearchBar 
                setSortedMissions={setSortedMissions} 
                fullMissionsList={fullMissionsList}
            />
            <table className={styles.table} data-testid="missionTable">
                <thead className={styles.head}>
                    <tr>
                        {tableHeadings?.map((heading: string, index: number) => {
                            return (
                                <td key={index}>
                                    <button className={styles.headingButton} onClick={() => handleSort(heading.toLowerCase())}>
                                        {heading}
                                        <ArrowDropDownIcon/>
                                    </button>
                                </td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sortedMissions?.length > 0 && 
                        sortedMissions?.map((mission: IMission) => {
                            return <TableRow mission={mission} key={mission?.id}/>
                        })
                    }
                    {sortedMissions?.length <= 0 && 
                        <tr className={styles.emptySearchMessage}>
                            <td colSpan={6}>No results match this search criteria.</td>
                        </tr>
                    }
                </tbody> 
            </table>
        </div>
    );
}

export default MissionTable;