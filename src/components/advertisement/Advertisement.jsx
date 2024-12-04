import styles from './advertisement.module.css';

const Advertisement = ({ photoUrl, regionName, regionScript }) => {
	return (
		<div className={styles.container}>
			<div className={styles.regionImg}>
				<img src={photoUrl} alt={regionName} />
			</div>
			<div className={styles.regionInfo}>
				<div className={styles.regionName}>{regionName}</div>
				<div className={styles.regionScript}>{regionScript}</div>
			</div>
		</div>
	);
};

export default Advertisement;
