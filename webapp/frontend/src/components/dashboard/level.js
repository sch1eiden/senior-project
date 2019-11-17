import React from 'react';
import {withTranslation} from 'react-i18next'
import Fade from 'react-reveal/Fade'
import BinBar from './binBar'
import './css/board.css'

const Level = ({t}) => {
    return (
        <section>
            <div id="Level" className="row">
                <div className="col-sm-8">
                    <Fade left>
                        <BinBar />
                    </Fade>
                </div>
                <div className="col-sm-4">
                    <Fade right>
                        <div id="levelCard" className="card bg-light card-body">
                            <h1 className="card-title">{t('level')}</h1>
                            <p className="card-text">{t('levelContent')}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
export default withTranslation()(Level);