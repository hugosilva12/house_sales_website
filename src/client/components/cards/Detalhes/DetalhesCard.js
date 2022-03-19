import React from 'react'

import styles from './DetalhesCard.module.sass'
import iconquarto from '../../../assets/images/iconquartos.png'
import iconarea from '../../../assets/images/iconarea.png'
import iconwc from '../../../assets/images/icon_wc.png'
const STORAGE = (process.env.REACT_APP_STORAGE || '')

const ThumbCard = (props) => {
	const { aspectRatio, item } = props
	const aspect = (typeof aspectRatio !== 'string' ? '16:7' : aspectRatio).split(':')
	const paddingTop = aspect.length === 2 ? (parseInt(aspect[1], 10) / parseInt(aspect[0], 10) * 100) : undefined
	const imgSource = (item.images || [])[0]
	const style = {
		paddingTop: paddingTop ? `${paddingTop}%` : undefined,
		backgroundImage: imgSource ? `url(${STORAGE}${encodeURI(imgSource)})` : undefined
	}

	return (
		<div className={styles['root']}>
			<div className={styles['thumb']} style={style} />
			<div className={`${styles['root']}`}>
				<div className={`${styles['barra-titulos']}`}>
					<div className={styles['w-max-with']}>
						<div className={styles['titulos']}>
							<h2>{item.distrito}, {item.concelho}</h2>
							<h1>{item.title}</h1>
						</div>
						<div className={styles['titulos-right']}>
							<div className={styles['precos']}>
								<div className={styles['valor']}>
									{item.price}€
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		
			<div className={styles['deta']}>
				<div className={styles['w-max-with']}>
					<div className={styles['esq']}>
						<ul className={styles['bloco-caracteristicas']}>
							<li>
								<span class="icon-imovel-quartos" title="Quartos" alt="Quartos"><img src={iconquarto}></img></span>

								<span class="numb">	{item.rooms}</span>

							</li>

							<li>
								<span class="icon-imovel-quartos" title="Quartos" alt="Quartos"><img src={iconarea}></img></span>
								<span class="numb"> {item.area} m2</span>
							</li>
							<li>
								<span class="icon-imovel-quartos" title="Quartos" alt="Quartos"><img src={iconwc}></img></span>
								<span className={styles['numb']}>  {item.wc}</span>
							</li>
						</ul>
						<span className={styles['lbl_descricao']}><b>Descrição</b></span>
						<div className={styles['descricao']}>
							{item.description}
						</div>
						<table cellpadding="0" cellspacing="0" width="624" border="0" className={styles['tabela']}>
							<tbody>
								<tr>
									<td align="left" className={styles['td-esq']}>
									<table cellpadding="0" cellspacing="0" width="624px" border="0" className={styles['tabela-esq']}>
									<tbody>
										<tr>
											<td>Tipo de imóvel: </td>
											<td><b>{item.title}</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										<tr>
											<td>Preço da venda: </td>
											<td><b>{item.price}€</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										<tr>
											<td>Área bruta:	</td>
											<td><b>{item.area} m<sup>2</sup></b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										<tr>
											<td>Quartos:	</td>
											<td><b>{item.rooms}</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
									</tbody>
									</table>
									</td>
									<td>
									<table cellpadding="0" cellspacing="0" width="300px" border="0" className={styles['tabela-dir']}>
										<tbody>
										<tr>
											<td>Wc: </td>
											<td><b>{item.wc}</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										<tr>
											<td>Distrito: </td>
											<td><b>{item.distrito}</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										<tr>
											<td>Concelho: </td>
											<td><b>{item.concelho}</b></td>
										</tr>
										<tr>
											<td className={styles['separador']}></td>
										</tr>
										</tbody>
									</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>





	)
}

export default ThumbCard