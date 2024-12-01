import styles from './region.module.css';

const Region = ({ label }) => {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<div className={styles.inputbox}></div>
		</div>
	);
};

export default Region;
