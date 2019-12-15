import React from 'react'
import { withTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import './css/sensor.css'
const Sensor = ({ t }) => {
	return (
		<section>
			<div id='Sensor' className='row'>
				<div id='overlay-sensor' className='col-sm-6'>
					<Fade right>
						<div className='card bg-light card-body'>
							<h1 className='card-title'>{t('sensor')}</h1>
							<p className='card-text'>{t('sensorContent')}</p>
							<p className='card-text'>
								{t('ref')}{' '}
								<a
									className='card-text'
									href='https://en.wikipedia.org/wiki/Sensor'
								>
									https://en.wikipedia.org/wiki/Sensor
								</a>
							</p>
						</div>
					</Fade>
				</div>
				<div id='overlay-sensor-img' className='col-sm-6 text-center'>
					<Fade left>
						<img
							src={require('./img/29146-110060049 6.jpg')}
							className='img'
							alt='responsive'
							width='50%'
							style={{ position: 'relative' }}
						/>
					</Fade>
				</div>
				<div id='overlay-sensor-img1' className='col-sm-6 text-center'>
					<Fade top>
						<img
							src={require('./img/ultrasonic_sensor.jpg')}
							className='img'
							alt='responsive'
							width='20%'
							style={{ position: 'relative' }}
						/>
					</Fade>
				</div>
				<div id='overlay-sensor1' className='col-sm-6'>
					<Fade right>
						<div className='card bg-light card-body'>
							<h1 className='card-title'>{t('ultrasonic')}</h1>
							<p className='card-text'>{t('ultraContent')}</p>
							<p className='card-text'>
								{t('ref')}{' '}
								<a
									className='card-text'
									href='http://www.tic.co.th/index.php?op=tips-detail&id=291'
								>
									http://www.tic.co.th/index.php?op=tips-detail&id=291
								</a>
							</p>
						</div>
					</Fade>
				</div>
				<div id='overlay-sensor2' className='col-sm-6'>
					<Fade right>
						<div className='card bg-light card-body'>
							<h1 className='card-title'>{t('magnet')}</h1>
							<p className='card-text'>{t('magnetContent')}</p>
							<p className='card-text'>
								{t('ref')}{' '}
								<a
									className='card-text'
									href='https://www.ioxhop.com/product/402/mc-38-mc38-wired-door-window-sensor-magnetic-switch'
								>
									https://www.ioxhop.com/product/402/mc-38-mc38-wired-door-window-sensor-magnetic-switch
								</a>
							</p>
						</div>
					</Fade>
				</div>
				<div id='overlay-sensor-img2' className='col-sm-6 text-center'>
					<Fade bottom>
						<img
							src={require('./img/magenetic_door_switch.jpg')}
							className='img'
							alt='responsive'
							width='20%'
							style={{ position: 'relative' }}
						/>
					</Fade>
				</div>
			</div>
		</section>
	)
}
export default withTranslation()(Sensor)
