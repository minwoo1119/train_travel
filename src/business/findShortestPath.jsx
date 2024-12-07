import data from '../db/regionInfo.json';

export const findShortestPath = (start, end) => {
	const graph = {};
	const stationMap = {};

	// 그래프 및 역 이름 초기화
	data.forEach((region) => {
		graph[region.region] =
			region.connectedRegions?.reduce((acc, curr) => {
				if (curr && curr.region && curr.travelTime !== undefined) {
					acc[curr.region] = curr.travelTime;
				}
				return acc;
			}, {}) || {};
		stationMap[region.region] = region.stationName;
	});

	if (!graph[start] || !graph[end]) {
		return '출발지나 도착지가 유효하지 않습니다.';
	}

	const dijkstra = (start, end) => {
		const distances = {};
		const previous = {};
		const queue = [];

		for (const node in graph) {
			distances[node] = Infinity;
			previous[node] = null;
		}
		distances[start] = 0;
		queue.push({ node: start, distance: 0 });

		while (queue.length > 0) {
			queue.sort((a, b) => a.distance - b.distance);
			const { node } = queue.shift();

			if (node === end) break;

			for (const neighbor in graph[node]) {
				const newDistance = distances[node] + graph[node][neighbor];
				if (newDistance < distances[neighbor]) {
					distances[neighbor] = newDistance;
					previous[neighbor] = node;
					queue.push({ node: neighbor, distance: newDistance });
				}
			}
		}

		const path = [];
		let currentNode = end;
		while (currentNode) {
			path.unshift(currentNode);
			currentNode = previous[currentNode];
		}

		return { path, distance: distances[end] };
	};

	const result = dijkstra(start, end);

	if (result.distance === Infinity) {
		return '이동할 수 없습니다.';
	}

	const { path, distance } = result;

	if (path.length === 2) {
		return {
			start: stationMap[path[0]],
			end: stationMap[path[1]],
			totalTime: distance,
		};
	} else {
		return {
			start: stationMap[path[0]],
			via: stationMap[path[1]],
			startToViaTime: graph[path[0]][path[1]],
			end: stationMap[path[2]],
			viaToEndTime: graph[path[1]][path[2]],
		};
	}
};
