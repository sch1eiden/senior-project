import React from 'react';
import { useTranslation } from 'react-i18next'

const Header = () => {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation()
    return (
        <header id="Header" className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
            <ul class="col-sm-4 nav navbar-nav ml-0 justify-content-start" align="center">
                <li class="nav-item">
                    <a class="nav-link" href="/">{t('home')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/dashboard">{t('dashboard')}</a>
                </li>
            </ul>
            <ul className="col-sm-4 nav navbar-nav justify-content-center">
            <span class="navbar-brand mx-auto"><img src={require('./icon/logo1.png')} alt="responsive" width="100px" /></span>
            </ul>
            <ul class="col-sm-4 nav navbar-nav mr-0 justify-content-end" align="center">
                <li class="nav-item">
                    <img src={require('./icon/en.jpg')} onClick={() => i18n.changeLanguage("en")} alt="responsive" width="20px" style={{"cursor": "pointer"}}/>
                </li>
                <li class="nav-item">
                    <img src={require('./icon/th.png')} onClick={() => i18n.changeLanguage("th")} alt="responsive" width="20px" style={{"cursor": "pointer"}}/>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">{t('contact')}</a>
                </li>
            </ul>
        </header>
    );
};
export default Header
// <LanguageSelector />
// <a class="nav-link" href="#English" onClick={() => i18n.changeLanguage("en")}>English</a>
// <a class="nav-link" href="#Thai" onClick={() => i18n.changeLanguage("th")}>ไทย</a>