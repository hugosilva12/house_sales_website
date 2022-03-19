
import React, { useState } from 'react'
import useSession from '../hooks/useSession'
import useApi from '../hooks/useApi'
import { useHistory, Link, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { useParams } from "react-router";
import styles from './layout.module.sass'
import DetalhesCard from '../components/cards/Detalhes/DetalhesCard'

const Details = () => {
	const { articleId } = useParams()
	console.log(articleId)
	const [data, loading, error] = useApi(`/api/articles/${ articleId }`)
	console.log(data)
	return (
	
	
<main >
			{ loading && <div>Loading...</div> }
			{ error && <div>{ error.message || 'Error' }</div> }
			{ data && (
				<div>
			<DetalhesCard key={ 0 } className={ styles['repeat'] } item={ data } />
		
				</div>
			) }
		</main>
	
	)
}

export default Details