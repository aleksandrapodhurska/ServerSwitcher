import React from 'react';
import style from './filterArea.module.css';
import checkBoxStyle from '../ServerCard/serverCard.module.css'

const FilterArea = ({getServers, filtered, sorted, filterServers, sortServers}) => {

	return (
		<div className={style.filterArea}>
			<div>
				<span className={style.filterLabel}> ONLY RUNNING SERVERS</span>
				<label className={checkBoxStyle.switch}>
					<input type="checkbox" name="" onChange={filtered ? getServers : filterServers} checked={filtered ? 'checked' : ''}/>
					<span className={`${checkBoxStyle.slider} ${checkBoxStyle.round}`}></span>
				</label>
			</div>
			<div>
				<span className={style.filterLabel}>SORT BY CREATION TIME</span>
				<label className={checkBoxStyle.switch}> 
					<input type="checkbox" name="" onChange={sorted ? getServers : sortServers} checked={sorted ? 'checked' : ''}/>
					<span className={`${checkBoxStyle.slider} ${checkBoxStyle.round}`}></span>
				</label>

			</div>
		</div>
	)
}

export default FilterArea
