import React from 'react';
import {withTranslation} from 'react-i18next';
import Fade from 'react-reveal/Fade';
import './css/contact.css'
const Contact = ({t}) => {
    return (
        <div id="Contact" className="container-fluid">
            <h5 className="display-4">{t('contact')}</h5>
            <div className="row">
                <div className="col-sm-4">
                    <Fade left>
                        <div id="contact-card" className="card text-center border-primary bg-light">
                            <img src={require('./img/13131744_701899836616304_1323764539879205741_o.jpg')} style={{width:'100%'}} className="card-img-top" alt="responsive" />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{t('jokerName')}</h5>
                                <p className="card-text">CS#17 @SIT, KMUTT</p>
                                <p className="card-text text-secondary">narongrit.rodphroboon@outlook.co.th</p>
                                <p className="card-text text-primary">{t('jokerRole')}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="col-sm-4">
                    <Fade bottom>
                        <div id="contact-card" className="card text-center border-warning bg-light">
                            <img src={require('./img/76676824_572888883483667_2443523636200472576_n.jpg')} style={{width:'100%'}} className="card-img-top" alt="responsive" />
                            <div className="card-body">
                                <h5 className="card-title text-warning">{t('tigerName')}</h5>
                                <p className="card-text">CS#17 @SIT, KMUTT</p>
                                <p className="card-text text-secondary">saran_chalermrungroj@hotmail.com</p>
                                <p className="card-text text-warning">{t('tigerRole')}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="col-sm-4">
                    <Fade right>
                        <div id="contact-card" className="card text-center border-danger bg-light">
                            <img src={require('./img/18740061_1665367550170283_2750234411662113502_n.jpg')} style={{width:'100%'}} className="card-img-top" alt="responsive" />
                            <div className="card-body">
                                <h5 className="card-title text-danger">{t('aiewName')}</h5>
                                <p className="card-text">CS#17 @SIT, KMUTT</p>
                                <p className="card-text text-secondary">aiew.tanapat@gmail.com</p>
                                <p className="card-text text-danger">{t('aiewRole')}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
export default withTranslation()(Contact)