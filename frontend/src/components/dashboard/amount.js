import React from 'react'
import { withTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import BinGraph from './binGraph'
import './css/board.css'

const Amount = ({ t }) => {
	return (
		<section>
			<div id='Statistic' className='row'>
				<div className='col-sm-4'>
					<Fade left>
						<div id='statisticCard' className='card bg-light card-body'>
							<h1 className='card-title'>{t('statistic')}</h1>
							<p>{t('statisticContent')}</p>
						</div>
					</Fade>
				</div>
				<div id='BinGraph' className='col-sm-8'>
					<Fade right>
						<BinGraph />
					</Fade>
				</div>
			</div>
		</section>
	)
}
export default withTranslation()(Amount)
