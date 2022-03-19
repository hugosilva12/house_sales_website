import React from 'react'
import styles from './Header.module.sass'
import AdvancedSearchInput from '../AdvancedSearchInput/AdvancedSearchInput'

const Header = () => {
	return (
		<div className={ styles['root'] }>
			<div className={ styles['content'] }>
				<div className={ styles['details'] }>
					<h1>Find a place you dreamed</h1>
					<p>We can help you find the place you always wanted. Feel free to search our houses or contact one of our specialists.</p>
				</div>
				<div className={ styles['search-input-container'] }>
					<div>
						<AdvancedSearchInput />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
