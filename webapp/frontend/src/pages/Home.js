import React from 'react';
import { withTranslation } from 'react-i18next'
import Intro from '../components/home/Intro';
import BinGarbage from '../components/home/BinGarbage';
import WasteManagement from '../components/home/WasteManagement';
import Cnn from '../components/home/Cnn';
import Sensor from '../components/home/Sensor';
import Content from '../components/home/Content';

const Home = ({t}) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <Intro />
        </div>
        <div className="container-fluid">
          <Content />
        </div>
        <div className="container-fluid">
          <BinGarbage />
        </div>
        <div className="container-fluid">
          <WasteManagement />
        </div>
        <div className="container-fluid">
          <Cnn />
        </div>
        <div className="container-fluid">
          <Sensor />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Home);