import React from 'react';
import {withTranslation} from 'react-i18next'
import Fade from 'react-reveal/Fade'
import './css/sensor.css';
const Sensor = ({t}) => {
    return (
        <section>
            <div id="Sensor" className="row">
                <div id="overlay-sensor-img" className="col-sm-6">
                    <Fade left>
                        <img src={require('./img/29146-110060049 6.jpg')} className="img" alt="responsive" width="50%" style={{position:'relative'}} />
                    </Fade>
                    <Fade top>
                        <img src={require('./img/ultrasonic_sensor.jpg')} className="img" alt="responsive" width="20%" style={{position:'relative'}} />
                    </Fade>
                    <Fade bottom>
                        <img src={require('./img/magenetic_door_switch.jpg')} className="img" alt="responsive" width="20%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-sensor" className="col-sm-6">
                    <Fade right>
                        <div className="card bg-light card-body">
                            <h1 className="card-title">{t('sensor')}</h1>
                            <p className="card-text">{t('sensorContent')}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(Sensor);