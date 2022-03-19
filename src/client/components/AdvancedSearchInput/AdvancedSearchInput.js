import React, { useState } from 'react'

import { stringify } from 'query-string'

import styles from './AdvancedSearchInput.module.sass'
import Dropdown from './Dropdown'
import Range from '../inputs/Range/Range'

const options = [
	{
		name: '0+'
	},
	{
		id: '1+',
		name: '1+'
	},
	{
		id: '2+',
		name: '2+'
	},
	{
		id: '3+',
		name: '3+'
	},
	{
		id: '4+',
		name: '4+'
	}
]

const AdvancedSearchInput = () => {
	const [searchData, setSearchData] = useState({ rooms: 0 })
	const [roomsNumber, setRoomsNumber] = useState(null)

	const [advancedSearch, setAdvancedSearch] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		const searchString = stringify(searchData, {arrayFormat: 'comma'})
		console.log(searchString)
	
		
	}
	return (
		<div className={ styles['root'] }>
			{ advancedSearch && (
				<form onSubmit={ handleSubmit } className={ styles['advanced-form'] }>
					<div>
						<h5>Advanced Search</h5>
						<div>
							<h4>Number of rooms</h4>
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
							<h4>Location</h4>
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
					</div>
				</form>
			) }
			<form onSubmit={ handleSubmit } className={ styles['form'] }>
				<div className={ styles['dropdown-container'] }>
					<Dropdown
						className={ styles['dropdown'] }
						value={ roomsNumber || 'Rooms' }
						options={ options }
						onChange={ (value) => {
							setRoomsNumber(value)
						} }
					/>
				</div>
				<div className={ styles['input-container'] }>
					<input placeholder='Type Location (T3 Porto)' />
				</div>
				<button type="submit" className={ styles['find-button'] }><b>Find</b></button>
				
				<button
					type="button"
					className={ styles['more-options'] }
					onClick={ () => {
						setAdvancedSearch(!advancedSearch)
					} }
				>Options</button>
			</form>
		</div>
	)
}

export default AdvancedSearchInput