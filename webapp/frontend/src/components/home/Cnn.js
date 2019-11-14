import React from 'react';
import {withTranslation} from 'react-i18next'
import Fade from 'react-reveal/Fade'
import './css/cnn.css';
const Cnn = ({t}) => {
    return (
        <section>
            <div id="Cnn" className="row">
                <div className="col-sm-12">
                    <Fade bottom>
                        <img src={require('./img/light-grey-background.png')} className="img-fluid hero banner" alt="responsive" width="100%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-cnn-img" className="col-sm-6">
                    <Fade bottom>
                        <img src={require('./img/neural-network-3637503_1280.png')} className="img" alt="responsive" width="50%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-cnn" className="col-sm-6">
                    <Fade top>
                        <div className="card bg-light card-body">
                            <h1 className="card-title">{t('cnn')}</h1>
                            <p className="card-text">{t('cnnContent')}</p>
                        </div>
                    </Fade>
                </div>
                <div className="col-sm-12">
                    <Fade bottom>
                        <img src={require('./img/light-grey-background.png')} className="img-fluid hero banner" alt="responsive" width="100%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-cnn-img1" className="col-sm-6 text-center">
                    <Fade bottom>
                        <img src={require('./img/dewi-1.jpg')} className="img" alt="responsive" width="50%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-cnn1" className="col-sm-6">
                    <Fade top>
                        <div className="card bg-light card-body">
                            <p className="card-text">{t('cnnContent1')}</p>
                            <p className="card-text">{t('ref')} <a className="card-text" href="https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53">https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53</a></p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(Cnn);