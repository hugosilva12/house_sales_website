import React from 'react'
import Header from "../components/Header/Header"
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import useApi from '../hooks/useApi'

import styles from './layout.module.sass'
import Grid from '../components/Grid/Grid'
import ThumbCard from '../components/cards/ThumbCard/ThumbCard'

const Homepage = () => {
	const { search } = useLocation()

	const parseParams = parse(search, { arrayFormat: 'comma' })
	const filters = {
		...parseParams,
		page_size: undefined,
		page: undefined
	}
	const [data, loading, error, reload] = useApi(`/api/articles`, parseParams.page_size || 8, parseParams.page || 0, filters, true)
	const items = !error ? (data || { list: [] }).list || [] : []
	const firstRowItems = items.slice(0, 2)
	const otherItems = items.slice(2)
	return (
		<>
			<Header />
			<main className={ styles['max-width'] }>
				<section className={ styles['section'] } >
					<h2>Highlights</h2>
				</section>
				<section className={ styles['section'] } >
					<Grid className={ styles['grid'] } cols={ [1, 1, 1] }>
						{ (otherItems || []).map((item, index) => (
							<ThumbCard key={ index } item={ item } />
						)) }
					</Grid>
				</section>
			</main>
		</>
	)
}

export default Homepage