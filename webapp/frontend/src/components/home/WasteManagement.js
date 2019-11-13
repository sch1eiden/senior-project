import React from 'react';
import {withTranslation} from 'react-i18next'
import Fade from 'react-reveal/Fade'
import './css/manage.css'
const WasteManagement = ({t}) => {
    return (
        <section>
            <div id="WasteManagement" className="row">
                <div id="overlay-manage-img" className="col-sm-6">
                    <div className="col-sm-12">
                        <Fade left>
                            <img src={require('./img/types-of-bins.jpg')} className="img" alt="responsive" width="50%" style={{position:'relative'}} />
                        </Fade>
                    </div>
                    <div className="col-sm-12">
                        <Fade left>
                            <img src={require('./img/800px-Waste_hierarchy_rect-en.svg.png')} className="img" alt="responsive" width="50%" style={{position:'relative'}} />
                        </Fade>
                    </div>
                </div>
                <div id="overlay-manage" className="col-sm-6">
                    <Fade right>
                        <div className="card bg-light card-body">
                            <h1 className="card-title">{t('manage')}</h1>
                            <p className="card-text">{t('manageContent')}</p>
                            <p className="card-text">{t('ref')} <a className="card-text" href="https://en.wikipedia.org/wiki/Waste_management">https://en.wikipedia.org/wiki/Waste_management</a></p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(WasteManagement);