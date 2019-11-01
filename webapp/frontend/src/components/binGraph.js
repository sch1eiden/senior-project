/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import config from '../firebase';
import _ from 'lodash';

const db = config.firestore();

const BinGraph = () => {
    
    const [binLine, setBinLine] = useState([]);

    const [aluminium, setAluminium] = useState({});
    const [glass, setGlass] = useState({});
    const [paper, setPaper] = useState({});
    const [plastic, setPlastic] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        const unsubscribe = db.collection('deposits').onSnapshot(ss => {
            let daysAgo = [];
            for(let i=0; i<7; i++) {
                daysAgo[i] = moment().subtract(i, 'days').format("DD/MM/YYYY");
            }

            const data = {};
            let aluminium = {};
            let glass = {};
            let paper = {};
            let plastic = {};
            ss.forEach(document => {
                data[document.id] = document.data();
            })
            setData(data);
            aluminium = _.filter(data, {'id': 0});
            setAluminium(aluminium);
            glass = _.filter(data, {'id': 1});
            setGlass(glass);
            paper = _.filter(data, {'id': 2});
            setPaper(paper);
            plastic = _.filter(data, {'id': 3});
            setPlastic(plastic);

            aluminium.forEach(item => {
                let dateAlu = moment(item.date.toDate()).format("DD/MM/YYYY");
                item.date = dateAlu;
            })
            glass.forEach(item => {
                let dateGlass = moment(item.date.toDate()).format("DD/MM/YYYY");
                item.date = dateGlass;
            })
            paper.forEach(item => {
                let datePaper = moment(item.date.toDate()).format("DD/MM/YYYY");
                item.date = datePaper;
            })
            plastic.forEach(item => {
                let datePlastic = moment(item.date.toDate()).format("DD/MM/YYYY");
                item.date = datePlastic;
            })
            let aluAmount = 0;
            let glassAmount = 0;
            let paperAmount = 0;
            let plasticAmount = 0;
            let final = [];
            let finalAlu;
            let finalGlass;
            let finalPaper;
            let finalPlastic;

            for (let i = 0; i < daysAgo.length; i++){
                finalAlu = _.filter(aluminium, {"date": daysAgo[i]});
                aluAmount = finalAlu.length;
                finalGlass = _.filter(glass, {"date": daysAgo[i]});
                glassAmount = finalGlass.length;
                finalPaper = _.filter(paper, {"date": daysAgo[i]});
                paperAmount = finalPaper.length;
                finalPlastic = _.filter(plastic, {"date": daysAgo[i]});
                plasticAmount = finalPlastic.length;
                final.push({
                    "date": daysAgo[i],
                    "aluAmount": aluAmount,
                    "glassAmount": glassAmount,
                    "paperAmount": paperAmount,
                    "plasticAmount": plasticAmount,
                })
            }
            setBinLine({
                labels: [final[6].date, final[5].date, final[4].date, final[3].date, final[2].date, final[1].date, final[0].date],
                datasets:[
                    {
                        label: 'Aluminium Can',
                        fill: false,
                        borderColor: 'rgba(249, 105, 14, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(249, 105, 14, 0.6)',
                        lineTension: 0,
                        data: [final[6].aluAmount, final[5].aluAmount, final[4].aluAmount, final[3].aluAmount, final[2].aluAmount, final[1].aluAmount, final[0].aluAmount],
                        backgroundColor:[
                            'rgba(249, 105, 14, 0.6)',
                        ]
                    },
                    {
                        label: 'Glass',
                        fill: false,
                        borderColor: 'rgba(25, 181, 254, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(25, 181, 254, 0.6)',
                        data: [final[6].glassAmount, final[5].glassAmount, final[4].glassAmount, final[3].glassAmount, final[2].glassAmount, final[1].glassAmount, final[0].glassAmount],
                        lineTension: 0,
                        backgroundColor:[
                            'rgba(25, 181, 254, 0.6)',
                        ]
                    },
                    {
                        label: 'Paper',
                        fill: false,
                        borderColor: 'rgba(245, 229, 27, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(245, 229, 27, 0.6)',
                        lineTension: 0,
                        data: [final[6].paperAmount, final[5].paperAmount, final[4].paperAmount, final[3].paperAmount, final[2].paperAmount, final[1].paperAmount, final[0].paperAmount],
                        backgroundColor:[
                            'rgba(245, 229, 27, 0.6)',
                        ]
                    },
                    {
                        label: 'Plastic',
                        fill: false,
                        borderColor: 'rgba(27, 163, 156, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(27, 163, 156, 0.6)',
                        lineTension: 0,
                        data: [final[6].plasticAmount, final[5].plasticAmount, final[4].plasticAmount, final[3].plasticAmount, final[2].plasticAmount, final[1].plasticAmount, final[0].plasticAmount],
                        backgroundColor:[
                            'rgba(27, 163, 156, 0.6)',
                        ]
                    },
                ]
            });
        })
        return () => {
            unsubscribe();
        }
    }, []);

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
        <div id="BinGraph">
            <Line
            data = {binLine}
            options = {options}
            />
        </div>
    )
}
export default BinGraph;