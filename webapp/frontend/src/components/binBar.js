import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
// import firebase from '../firebase';

// const db = firebase.firestore()

// const API_URL = 'http://localhost:8000/api';
// const level_url = `${API_URL}/level/`;
// const garbage_url = `${API_URL}/garbage/`;

const GLASS_API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels/glass'
const ALUMINIUM_API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels/aluminium'
const PAPER_API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels/paper'
const PLASTIC_API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels/plastic'


const BinBar = () => {
    const [binBar, setBinBar] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // const resGarbage = await axios(garbage_url);
            // const resGlass = await axios(`${level_url}?garbage_id=1&ordering=-date_time_value`);
            // const resAluminium = await axios(`${level_url}?garbage_id=2&ordering=-date_time_value`);
            // const resPaper = await axios(`${level_url}?garbage_id=3&ordering=-date_time_value`);
            // const resPlastic = await axios(`${level_url}?garbage_id=4&ordering=-date_time_value`);
            const resGlass = await axios(GLASS_API);
            const resAluminium = await axios(ALUMINIUM_API);
            const resPaper = await axios(PAPER_API);
            const resPlastic = await axios(PLASTIC_API);
            // const garbage = resGarbage.data;
            const glass = resGlass.data.fields;
            const aluminium = resAluminium.data.fields;
            const paper = resPaper.data.fields;
            const plastic = resPlastic.data.fields;
            setBinBar({
                labels: [glass.title.stringValue, aluminium.title.stringValue, paper.title.stringValue, plastic.title.stringValue],
                datasets: [
                    {
                        label: 'Bin Level',
                        data: [glass.level.integerValue, aluminium.level.integerValue, paper.level.integerValue, plastic.level.integerValue],
                        backgroundColor:[
                            'rgba(25, 181, 254, 0.6)',
                            'rgba(219, 10, 91, 0.6)',
                            'rgba(245, 229, 27, 0.6)',
                            'rgba(27, 163, 156, 0.6)'
                        ],
                    }
                ]
            });
        };
        console.log('binBar', binBar);
        fetchData();
    }, [binBar]);
    
    const options = {
        responsive: true,
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
        <div id="BinBar">
            <Bar
            data = {binBar}
            options = {options}
            />
        </div>
    );
}
export default BinBar