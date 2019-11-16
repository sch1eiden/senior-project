import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import firebase from '../firebase';

const db = firebase.firestore();

const DoughnutChart = () => {
  const [rankDoughnut, setRankDoughnut] = useState([]);
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("rfid_id").orderBy("deposit", "desc").onSnapshot(ss => {
      const dict = {
        '0012616179': "Dog",
        '0012627617': "Bear",
        '0007833001': "Cat",
        '0014166168': "Rabbit",
        '0012710847': "Bird",
      };
      let rawdata = [];
      ss.forEach(document => {
        if(document.id==='0012616179') {
          rawdata.push({
            "id": document.id,
            "title": dict['0012616179'],
            "score": document.data().deposit,
          })
        } else if(document.id==='0012627617') {
          rawdata.push({
            "id": document.id,
            "title": dict['0012627617'],
            "score": document.data().deposit,
          })
        } else if(document.id==='0007833001') {
          rawdata.push({
            "id": document.id,
            "title": dict['0007833001'],
            "score": document.data().deposit,
          })
        } else if(document.id==='0014166168') {
          rawdata.push({
            "id": document.id,
            "title": dict['0014166168'],
            "score": document.data().deposit,
          })
        } else if(document.id==='0012710847') {
          rawdata.push({
            "id": document.id,
            "title": dict['0012710847'],
            "score": document.data().deposit,
          })
        } else {
          rawdata.push({
            "id": document.id,
            "title": document.id,
            "score": document.data().deposit,
          })
        }
      })
      setData(rawdata);
      setRankDoughnut({
        labels: [rawdata[0].title, rawdata[1].title, rawdata[2].title, rawdata[3].title, rawdata[4].title],
        datasets: [{
          data: [rawdata[0].score, rawdata[1].score, rawdata[2].score, rawdata[3].score, rawdata[4].score, ],
          backgroundColor:[
            'rgba(255, 80, 80, 0.8)',
            'rgba(255, 255, 80, 0.8)',
            'rgba(80, 255, 80, 0.8)',
            'rgba(80, 80, 255, 0.8)',
            'rgba(165, 0, 255, 0.8)',
          ],
          }
        ],
        
      })
    })
    return () => {
      unsubscribe();
    }
  }, [])
  
  return (
    <div id="DoughnutChart" className="container">
      <Doughnut 
        data={rankDoughnut}
      />
    </div>
  );
}

export default DoughnutChart;
