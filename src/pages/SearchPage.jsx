import Advertisement from '../components/advertisement/Advertisement';
import Region from '../components/region/Region';
import styles from './searchpage.module.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const SearchPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.destination}>
				<Region label="출발지" />
				<TrendingFlatIcon />
				<Region label="도착지" />
			</div>
			<Advertisement
				regionName="서울특별시"
				regionScript="서울특별시는 그냥 짱이다."
			/>
		</div>
	);
};

export default SearchPage;
