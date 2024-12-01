import styles from './header.module.css';

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>🚄</div>
			<div className={styles.title}>TRain, ip</div>
		</div>
	);
};

export default Header;
