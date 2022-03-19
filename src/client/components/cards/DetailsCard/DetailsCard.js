import React from 'react'

import styles from './DetailsCard.module.sass'
import { Link } from 'react-router-dom'
const STORAGE = (process.env.REACT_APP_STORAGE || '')

const DetailsCard = (props) => {
	const { item = {} } = props
	const imgSource = (item.images || [])[0]
	const style = {
		backgroundImage: imgSource ? `url(${ STORAGE }${ encodeURI(imgSource) })` : undefined
	}
	return (
		<div className={ styles['root'] }>
			<Link to={ `/articles/${ item.id }` }>
			<div className={ styles['thumb'] } style={ style } />
			</Link>
			<div className={ styles['details'] } >
			<Link  className={ styles['title'] } to={ `/articles/${ item.id }` }>
			<h4 className={ styles['title'] }>{ item.title }</h4>
			</Link>
			
			</div>
		</div>
	)
}

export default DetailsCard
