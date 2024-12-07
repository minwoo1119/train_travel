import { useLocation } from 'react-router-dom';
import styles from './resultpage.module.css';
import TravelRoute from '../components/travelroute/TravelRoute';
import { findShortestPath } from '../business/findShortestPath';
import Advertisement from '../components/advertisement/Advertisement.jsx';
import db from '../db/regionInfo.json';

const ResultPage = () => {
	const location = useLocation();
	const { departure, arrival } = location.state || {};
	const result = db.find((data) => data.region === arrival);
	if (result) {
		const { region, descript, photoUrl } = result;
		console.log(region, descript, photoUrl);
	} else {
		console.log('해당 지역을 찾을 수 없습니다.');
	}

	const renderTravelRoute = () => {
		if (!departure || !arrival) {
			return <p>출발지와 도착지 정보를 제공해주세요.</p>;
		}

		const result = findShortestPath(departure, arrival);

		if (typeof result === 'string') {
			return <p>{result}</p>;
		}

		if (result.via) {
			return (
				<>
					<TravelRoute
						routeName="경유 경로"
						departStation={result.start}
						arriveStation={result.via}
						costTime={`${result.startToViaTime}분`}
					/>
					<TravelRoute
						routeName="경유 경로"
						departStation={result.via}
						arriveStation={result.end}
						costTime={`${result.viaToEndTime}분`}
					/>
				</>
			);
		} else {
			return (
				<TravelRoute
					routeName="직행 경로"
					departStation={result.start}
					arriveStation={result.end}
					costTime={`${result.totalTime}분`}
				/>
			);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.result}>
				<h1>최적 경로 결과</h1>
				{renderTravelRoute()}
			</div>
			<div className={styles.regionInfo}>
				<Advertisement
					regionName={arrival}
					photoUrl={result.photoUrl}
					regionScript={result.descript}
				/>
			</div>
		</div>
	);
};

export default ResultPage;
