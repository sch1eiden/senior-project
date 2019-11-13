import React from 'react';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import './css/intro.css'
const Intro = ({t}) => {
    return (
        <section>
            <div className="row">
                <div className="col-sm-12">
                    <Fade bottom>
                        <div id="Intro" className="block">
                            <img src={require('./img/rubbish-3378624_1280.jpg')} className="img-fluid hero banner" alt="responsive" width="100%" style={{position:'relative'}} />
                        </div>
                    </Fade>
                </div>
                <div className="col-sm-12">
                    <Fade right>
                        <div id="overlay-intro">
                            <div className="card bg-light card-body">
                                <h1 className="card-title" align="center">{t('intro')}</h1>
                                <p className="card-text" align="center">{t('introContent')}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(Intro);
