import React, { useState, useEffect } from 'react'

import useCreateApi from '../../hooks/useCreateApi'

import styles from './Forms.module.sass'

const ArticleForm = (props) => {
	const { onSuccess, data: propsData } = props
	const stateData = propsData || { title: '', tipo: '',distrito:'',concelho:'',description:'' ,tags: '',price:' ',area:'',rooms:'',wc:" " ,images: [], props: { readTime: 10 } }
	const [data, setData] = useState(stateData)
	const [uploading, setUploading] = useState(false)
	const [uploadError, setUploadError] = useState(false)
	const [createOrUpdate, submitting, success, error] = useCreateApi('/api/articles', onSuccess)

	useEffect(() => {
		if (success) {
			onSuccess && onSuccess(true)
		}
	}, [success, onSuccess])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!submitting) {
			createOrUpdate(data)
		}
	}
	return (
		<div className={ styles['form'] }>
			<form onSubmit={ handleSubmit }>
				<div className={ styles['form-header'] }>
					<button type="button" onClick={ () => { onSuccess && onSuccess() } }><strong>Close</strong></button>
					<button primary="true" type="submit"><strong>Save</strong></button>
				</div>
				<div className={ styles['form-content'] }>
					{ error && <div className={ styles['form-error'] }><small>{ error.message }</small></div> }
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Title</strong>
						</div>
						<input required="true"
							type='text'
							name='Titulo'
							placeholder='Adicione um titulo'
							value={ data.title }
							onChange={ (e) => {
								setData({
									...data,
									title: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Tipo da moradia</strong>
						</div>
						<input required="true"
							type='text'
							name='Tipo'
							placeholder='Adicione o tipo da moradia'
							value={ data.tipo }
							onChange={ (e) => {
								setData({
									...data,
									tipo: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Distrito da Moradia</strong>
						</div>
						<input
							type='text'
							name='distrito'
							placeholder='Adicione a localizaçao'
							value={ data.distrito }
							onChange={ (e) => {
								setData({
									...data,
									distrito: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Concelho da Moradia</strong>
						</div>
						<input required="true"
							type='text'
							name='Tipo'
							placeholder='Adicione o Concelho'
							value={ data.concelho }
							onChange={ (e) => {
								setData({
									...data,
									concelho: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Descriçao</strong>
						</div>
						<input required="true"
							type='text'
							name='Tipo'
							placeholder='Adicione uma descrição'
							value={ data.description }
							onChange={ (e) => {
								setData({
									...data,
									description: e.target.value
								})
							} }
						/>
					</label>

					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Preço</strong>
						</div>
						<input required="true"
							type='text'
							name='er'
							placeholder='Adicione uma descrição'
							value={ data.price }
							onChange={ (e) => {
								setData({
									...data,
									price: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Area</strong>
						</div>
						<input required="true"
							type='number'
							name='er'
							placeholder='Adicione a area da habitação'
							value={ data.area }
							onChange={ (e) => {
								setData({
									...data,
									area: e.target.value
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Nº Quartos </strong>
						</div>
						<input required="true"
							type='number'
							name='er'
							placeholder='Adicione o número de quartos da habitação'
							value={ data.rooms }
							onChange={ (e) => {
								setData({
									...data,
									rooms: e.target.value
								})
							} }
						/>
					</label>

					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Nº Casas de banho </strong>
						</div>
						<input required="true"
							type='number'
							name='er'
							placeholder='Adicione o número de casa de banho da habitação'
							value={ data.wc }
							onChange={ (e) => {
								setData({
									...data,
									wc: e.target.value
								})
							} }
						/>
					</label>


					
				
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Read Time</strong>
						</div>
						<input
							type='text'
							name='readTime'
							placeholder='Add read time (m)'
							value={ data.props.readTime }
							onChange={ (e) => {
								setData({
									...data,
									props: {
										...data.props,
										readTime: e.target.value
									}
								})
							} }
						/>
					</label>
					<label className={ styles['text-input'] }>
						<div className={ styles['text-label'] }>
							<strong>Tags</strong>
						</div>
						<input
							type='text'
							name='tags'
							placeholder='Add tags (comma separated values)'
							value={ data.tags }
							onChange={ (e) => {
								setData({
									...data,
									tags: e.target.value
								})
							} }
						/>
					</label>
					
					<div>
						<div className={ styles['text-label'] }>
							<strong>Images</strong>
						</div>
						<div className={ styles['images-container'] }>
							{
								data.images.map((src, index) => (
									<div key={ index }>
										<div className={ styles['image-thumb'] }>
											<img src={ src } alt='' />
										</div>
										<button
											type='button'
											onClick={ () => {
												let imgs = [...data.images]
												imgs.splice(index, 1)
												setData({
													...data,
													images: imgs
												})
											} }
										>delete</button>
									</div>
								))
							}
						</div>
						<input 
							type='file'
							name='images'
							placeholder='Choose files'
							onChange={ (e) => {
								if (!uploading) {
									setUploading(true)
									const file = e.target.files[0]
									const formData = new FormData()
									formData.append('file', file)
									e.target.value = ''
									fetch('/api/upload', {
										method: 'POST',
										headers: {
											'Accepts': 'application/json'
										},
										body: formData
									})
										.then((r) => {
											if (r.ok) {
												try {
													return r.json()
												} catch (_) {
													return null
												}
											} else {
												setUploadError({
													status: r.status,
													message: r.statusText
												})
											}
										})
										.then((r) => {
											if (r && r.url) {
												setData({
													...data,
													images: [
														...data.images,
														r.url
													]
												})
											}
											setUploading(false)
										})
										.catch((e) => {
											console.log('error', e)
											setUploading(false)
											setUploadError({
												status: 500,
												message: e.toString && e.toString()
											})
										})
								}

							} }
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ArticleForm
