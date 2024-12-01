import styles from './regioninfo.module.css';

const RegionInfo = ({ regionName, regionEngName, regionImg }) => {
	return (
		<div className={styles.container}>
			<div className={styles.regionImg}>img</div>
			<div className={styles.regionInfo}>
				<div className={styles.regEngName}>{regionEngName}</div>
				<div className={styles.regionName}>{regionName}</div>
			</div>
		</div>
	);
};

export default RegionInfo;
