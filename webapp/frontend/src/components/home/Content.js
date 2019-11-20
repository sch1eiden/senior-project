import React from 'react'
import { withTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import './css/content.css'
const Content = ({ t }) => {
	return (
		<section>
			<div className='row' align='center'>
				<div className='col-sm-12'>
					<Fade bottom>
						<div id='overlay-content'>
							<div className='card bg-light'>
								<div className='card-header'>
									<h1 className='card-title' align='center'>
										{t('content')}
									</h1>
								</div>
								<div className='card-body text-center'>
									<ul className='list-group list-group-flush'>
										<li className='list-group-item'>
											<Link
												activeClass='active'
												to='BinGarbage'
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												{t('binGarbage')}
											</Link>
										</li>
										<li className='list-group-item'>
											<Link
												activeClass='active'
												to='WasteManagement'
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												{t('manage')}
											</Link>
										</li>
										<li className='list-group-item'>
											<Link
												activeClass='active'
												to='Cnn'
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												{t('cnn')}
											</Link>
										</li>
										<li className='list-group-item'>
											<Link
												activeClass='active'
												to='Sensor'
												spy={true}
												smooth={true}
												offset={0}
												duration={500}
											>
												{t('sensor')}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	)
}
export default withTranslation()(Content)
