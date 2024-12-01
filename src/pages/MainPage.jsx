import RegionInfo from '../components/regioninfo/RegionInfo';
import styles from './mainpage.module.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titletext}>기차를 타고 어디로 떠나볼까요 ?</div>
			<Link className={styles.btn} to="search">
				<div className={styles.searchBtn}>찾는 지역이 있으신가요 ?</div>
			</Link>
			<div className={styles.regionCard}>
				<RegionInfo
					regionName="서울특별시"
					regionEngName="Seoul"
					regionImg=""
				/>
				<RegionInfo
					regionName="서울특별시"
					regionEngName="Seoul"
					regionImg=""
				/>
				<RegionInfo
					regionName="서울특별시"
					regionEngName="Seoul"
					regionImg=""
				/>
				<RegionInfo
					regionName="서울특별시"
					regionEngName="Seoul"
					regionImg=""
				/>
			</div>
		</div>
	);
};

export default MainPage;
