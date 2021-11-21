import React, { useEffect, useState } from "react";
import FilterArea from "./components/FilterArea/FilterArea";
import ServerList from "./components/ServerList/ServerList";

import style from "./app.module.css";

const App = () => {
	const [servers, setServers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filtered, setFiltered] = useState(false);
	const [sorted, setSorted] = useState(false);

	const getServers = () => {
		setLoading(true);
		fetch("http://localhost:1000/api/servers")
			.then((res) => res.json())
			.then((data) => setServers(data));
		setLoading(false);
		setFiltered(false);
		setSorted(false);
	};

	useEffect(() => {
		getServers();
	}, []);

	const filterServers = () => {
		const filteredServers = servers.filter((server) =>
			server.status ? server : ""
		);
		setServers(filteredServers);
		setFiltered(true);
	};

	const byField = (field) => {
		return (a, b) => (a[field] > b[field] ? 1 : -1);
	};

	const sortServers = () => {
		const sortedServers = servers.sort(byField("created"));
		setServers(sortedServers);
		setSorted(true);
	};

	return (
		<div className={style.app}>
			<FilterArea
				setServers={setServers}
				filtered={filtered}
				sorted={sorted}
				getServers={getServers}
				filterServers={filterServers}
				sortServers={sortServers}
			/>
			<ServerList
				loading={loading}
				servers={servers}
				getServers={getServers}
			/>
		</div>
	);
};

export default App;
