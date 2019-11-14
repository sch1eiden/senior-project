import React from 'react';
import {withTranslation} from 'react-i18next'
import Fade from 'react-reveal/Fade'
import './css/bin.css';
const BinGarbage = ({t}) => {
    return (
        <section>
            <div id="BinGarbage" className="row">
                <div className="col-sm-12">
                    <Fade bottom>
                        <img src={require('./img/PKDfnW.jpg')} className="img-fluid hero banner" alt="responsive" width="100%" style={{position:'relative'}} />
                    </Fade>
                </div>
                <div id="overlay-bin" className="col-sm-6">
                    <Fade left>
                        <div className="card bg-light card-body">
                            <h1>{t('binGarbage')}</h1>
                            <p>{t('binContent')}</p>
                        </div>
                    </Fade>
                </div>
                <div id="overlay-bin-img" className="col-sm-6 text-center">
                    <Fade right>
                        <img src={require('./img/00india-trash-1-articleLarge.jpg')} className="img" alt="responsive" width="100%" style={{position:'relative'}} />
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(BinGarbage);
// <div id="overlay-block" className="col">
// <div className="card card-body">
//     <h1>{t('binGarbage')}</h1>
//     <p>{t('binContent')}</p>
// </div>
// </div>