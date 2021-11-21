import React from 'react'
import ServerCard from '../ServerCard/ServerCard'

import style from './serverList.module.css'

const ServerList = ({loading, servers, getServers}) => {
	return (
		<div className={style.serverList}>
			{loading && <div>Loading...</div>}
			{servers && servers.map(server => <ServerCard key={server.id} server={server} getServers={getServers}/>)}
		</div>
	)
}

export default ServerList
