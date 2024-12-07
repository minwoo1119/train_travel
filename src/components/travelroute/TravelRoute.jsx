import styles from './travelroute.module.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TravelRoute = ({ routeName, departStation, arriveStation, costTime }) => {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{routeName}</div>
			<div className={styles.route}>
				<div className={styles.station}>{departStation}</div>
				<div className={styles.cost}>
					<div className={styles.time}>{costTime}</div>
					<div className={styles.arrow}>
						<NavigateNextIcon />
					</div>
				</div>
				<div className={styles.station}>{arriveStation}</div>
			</div>
		</div>
	);
};

export default TravelRoute;
