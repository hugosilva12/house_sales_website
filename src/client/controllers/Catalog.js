import React, { useState } from 'react'
import Grid from '../components/Grid/Grid'

import styles from './layout.module.sass'
import useApi from '../hooks/useApi'
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import Range from '../components/inputs/Range/Range'
import DetailsCard from '../components/cards/DetailsCard/DetailsCard'

const Homepage = () => {
	const [searchData, setSearchData] = useState({ rooms: 0, location: '', tags: ['highlights', 'homepage'] })
	const { search } = useLocation()

	const parseParams = parse(search, { arrayFormat: 'comma' })
	const filters = {
		...parseParams,
		page_size: undefined,
		page: undefined
	}

	const [data, loading, error, reload] = useApi(`/api/articles`, parseParams.page_size || 24, parseParams.page || 0, filters, true)
	const items = !error ? (data || { list: [] }).list || [] : []

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	console.log("hello")
	return (
		<>
			<header className={ styles['header'] }>
				<div>
					Catalog
				</div>
			</header>
			<div className={ `${ styles['max-width'] } ${ styles['aside-col'] }` }>
				<div>
					<Grid cols={ [1, 1, 1] }>
						{ items.map((item, index) => (
							<DetailsCard key={ index } className={ styles['repeat'] } item={ item } />
						)) }
					</Grid>
				</div>
				<div>
					<div className={ styles['aside-header'] }><small>Filters</small></div>
					<form onSubmit={ handleSubmit }>
						<div>
							<h4 className={ styles['aside-title'] }>Number of rooms</h4>
							<Range
								value={ searchData.rooms }
								min="0"
								max="6"
								onChange={ (e) => {
									setSearchData({
										...searchData,
										rooms: e.target.value
									})
								} }
							/>
						</div>
						<div>
							<h4 className={ styles['aside-title'] }>Location</h4>
							<input
								type="text"
								placeholder="eg. Porto"
								value={ searchData.location }
								onChange={ (e) => {
									setSearchData({
										...searchData,
										location: e.target.value
									})
								} } />
						</div>
						<div className={ styles['actions'] }>
							<button type="submit" className={ styles['search-button'] }><b>Find</b></button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Homepage