import styles from './region.module.css';

const Region = ({ label, dropDownList, handleFunction }) => {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{label}</div>
			<select
				name="dropdown"
				id="dropdown"
				onChange={(e) => handleFunction(e.target.value)}
			>
				{dropDownList.map((data, index) => (
					<option value={data} key={index}>
						{data}
					</option>
				))}
			</select>
		</div>
	);
};

export default Region;
