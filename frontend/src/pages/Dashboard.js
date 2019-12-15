import React from 'react'
import { withTranslation } from 'react-i18next'
import Level from '../components/dashboard/level'
import Amount from '../components/dashboard/amount'

const Dashboard = ({ t }) => {
	return (
		<div className='container' id='Dashboard'>
			<h3 className='display-4' align='center'>
				{t('dashboard')}
			</h3>
			<Level />
			<Amount />
		</div>
	)
}
export default withTranslation()(Dashboard)
