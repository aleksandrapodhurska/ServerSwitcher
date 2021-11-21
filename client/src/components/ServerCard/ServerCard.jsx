import React from "react";

import style from "./serverCard.module.css";

const ServerCard = ({ server, getServers }) => {
	const handleCheck = () => {
		fetch(`http://localhost:1000/api/servers/${server.id}`, {
			method: "put",
		})
			.then((res) => res.json())
			.then(() => getServers());
	};

	return (
		<div className={style.serverCard}>
			<h3>{server.name}</h3>
			<div>
				<span className={style.label}>
					{server.status ? "RUNING" : "OFF"}
				</span>
				<label className={style.switch}>
					<input
						type="checkbox"
						checked={server.status && "checked"}
						onChange={handleCheck}
					/>
					<span className={`${style.slider} ${style.round}`}></span>
				</label>
			</div>
			<p>IP: {server.ip}</p>
			<p>
				{server.created
					.replace(/T/, " ")
					.replace(/Z/, "")
					.replace(/.000/, "")}
			</p>
			<h5>Owner: {server.hostingCompany}</h5>
		</div>
	);
};

export default ServerCard;
