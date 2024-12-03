import RegionInfo from '../components/regioninfo/RegionInfo';
import styles from './mainpage.module.css';
import regionData from '../db/regionInfo.json';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titletext}>기차를 타고 어디로 떠나볼까요 ?</div>
			<Link className={styles.btn} to="search">
				<div className={styles.searchBtn}>찾는 지역이 있으신가요 ?</div>
			</Link>
			<div className={styles.regionCard}>
				{regionData.map((data, index) => (
					<RegionInfo
						regionName={data.region}
						regionEngName={data.regionEngName}
						regionImg={data.photoUrl}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default MainPage;
