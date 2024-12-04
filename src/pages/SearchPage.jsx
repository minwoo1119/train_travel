import Advertisement from '../components/advertisement/Advertisement';
import Region from '../components/region/Region';
import styles from './searchpage.module.css';
import regionData from '../db/regionInfo.json';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchPage = () => {
	const [departureArea, setDepartureArea] = useState('서울');
	const [arrivalArea, setArrivalArea] = useState('서울');
	const randomIndex = Math.floor(Math.random() * regionData.length);
	const randomData = regionData[randomIndex];
	const regionList = regionData.map((region, index) => region.region);

	const handleDepartureArea = (area) => {
		setDepartureArea(area);
		console.log('Departure Changed : ' + area);
	};

	const handleArrivalArea = (area) => {
		setArrivalArea(area);
		console.log('Arrival Changed : ' + area);
	};

	return (
		<div className={styles.container}>
			<div className={styles.destination}>
				<Region
					label="출발지"
					dropDownList={regionList}
					handleFunction={handleDepartureArea}
				/>
				<TrendingFlatIcon />
				<Region
					label="도착지"
					dropDownList={regionList}
					handleFunction={handleArrivalArea}
				/>
			</div>
			<div className={styles.goSearch}>
				<Link
					to="/result"
					state={{ departure: departureArea, arrival: arrivalArea }}
				>
					최적 경로 찾기
				</Link>
			</div>
			<Advertisement
				regionName={randomData.region}
				regionScript={randomData.descript}
				photoUrl={randomData.photoUrl}
			/>
		</div>
	);
};

export default SearchPage;
