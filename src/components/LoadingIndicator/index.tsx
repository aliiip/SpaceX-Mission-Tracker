import { CircularProgress } from '@mui/material';

import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = () => {
    return (
        <div className={styles.loadingIndicatorContainer} data-testid="loadingIndicator">
            <CircularProgress className={styles.circularProgression}/>
        </div>
      );
}

export default LoadingIndicator;