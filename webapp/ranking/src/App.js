import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import firebase from './firebase';
import _ from 'lodash';
// import firebase from './firebase';

const db = firebase.firestore();

const App = () => {
  const [rankPie, setRankPie] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('ranks').onSnapshot(ss => {
      let data = [];
      let id = [];
      ss.forEach(document => {
        data.push({
          "docId": document.id,
          "id": document.data().id,
          "date": moment(document.data().date.toDate()).format("DD/MM/YYYY"),
        })
        id.push(document.data().id)
      })
      setData(data);
      for (let i=0; i< id.length; i++) {
        
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    legend: {
        display: true,
    },
    tooltips: {
        enabled: true,
    },
    scales: {
        xAxes:[{
            ticks:{
                beginAtZero:true
            },
        }],
        yAxes:[{
            display:true,
            ticks: {
                beginAtZero:true,
                suggestedMax: 100,
            }
        }]
    }
}

  return (
    <div className="App">
      <Pie 
        data={rankPie}
        options={options}
      />
    </div>
  );
}

export default App;
