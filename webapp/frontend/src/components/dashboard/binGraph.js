/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import config from '../../firebase';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';

const db = config.firestore();

const BinGraph = ({t}) => {
    
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

            let daysAfter = [];
            for (let i=0; i<7; i++){
                daysAfter[i] = moment().subtract(i+7, 'days').format("DD/MM/YYYY");
            }

            let data = [];
            ss.forEach(document => {
                data.push({
                    "docId": document.id,
                    "id": document.data().id,
                    "date": moment(document.data().date && document.data().date.toDate()).format("DD/MM/YYYY"),
                })
            })

            let aluminum = {};
            let glass = {};
            let paper = {};
            let plastic = {};
            
            console.log('data', data)
            for (let i=0; i<daysAfter.length; i++){
                let unused = _.filter(data, {'date': daysAfter[i]});
                if(unused.length !== 0){
                    unused.forEach(item => {
                        db.collection('deposits').doc(item.docId).delete();
                    })
                }
                
            }

            setData(data);
            aluminum = _.filter(data, {'id': 0});
            setAluminium(aluminum);
            glass = _.filter(data, {'id': 1});
            setGlass(glass);
            paper = _.filter(data, {'id': 2});
            setPaper(paper);
            plastic = _.filter(data, {'id': 3});
            setPlastic(plastic);

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
                finalAlu = _.filter(aluminum, {"date": daysAgo[i]});
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
            // Aluminium red
            // Glass Yellow
            // Paper Green
            // Plastic BLue
            setBinLine({
                labels: [final[6].date, final[5].date, final[4].date, final[3].date, final[2].date, final[1].date, final[0].date],
                datasets:[
                    {
                        label: t('aluminum'),
                        fill: false,
                        borderColor: 'rgba(255, 80, 80, 0.8)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(255, 80, 80, 0.8)',
                        lineTension: 0,
                        data: [final[6].aluAmount, final[5].aluAmount, final[4].aluAmount, final[3].aluAmount, final[2].aluAmount, final[1].aluAmount, final[0].aluAmount],
                        backgroundColor:[
                            'rgba(255, 80, 80, 0.8)',
                        ]
                    },
                    {
                        label: t('glass'),
                        fill: false,
                        borderColor: 'rgba(255, 255, 80, 0.8)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(255, 255, 80, 0.8)',
                        data: [final[6].glassAmount, final[5].glassAmount, final[4].glassAmount, final[3].glassAmount, final[2].glassAmount, final[1].glassAmount, final[0].glassAmount],
                        lineTension: 0,
                        backgroundColor:[
                            'rgba(255, 255, 80, 0.8)',
                        ]
                    },
                    {
                        label: t('paper'),
                        fill: false,
                        borderColor: 'rgba(80, 255, 80, 0.8)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(80, 255, 80, 0.8)',
                        lineTension: 0,
                        data: [final[6].paperAmount, final[5].paperAmount, final[4].paperAmount, final[3].paperAmount, final[2].paperAmount, final[1].paperAmount, final[0].paperAmount],
                        backgroundColor:[
                            'rgba(80, 255, 80, 0.8)',
                        ]
                    },
                    {
                        label: t('plastic'),
                        fill: false,
                        borderColor: 'rgba(80, 80, 255, 0.8)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(80, 80, 255, 0.8)',
                        lineTension: 0,
                        data: [final[6].plasticAmount, final[5].plasticAmount, final[4].plasticAmount, final[3].plasticAmount, final[2].plasticAmount, final[1].plasticAmount, final[0].plasticAmount],
                        backgroundColor:[
                            'rgba(80, 80, 255, 0.8)',
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
                    suggestedMax: 10,
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
export default withTranslation()(BinGraph);