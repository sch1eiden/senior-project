import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const API_URL = 'http://localhost:8000/api';
const glass_url = `${API_URL}/contain/?garbage_id=1`;
const aluminium_url = `${API_URL}/contain/?garbage_id=2`;
const paper_url = `${API_URL}/contain/?garbage_id=3`;
const plastic_url = `${API_URL}/contain/?garbage_id=4`;

const BinGraph = () => {
    const [binLine, setBinLine] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resGlass = await axios(glass_url);
            const resAluminium = await axios(aluminium_url);
            const resPaper = await axios(paper_url);
            const resPlastic = await axios(plastic_url);
            // Glass
            const glass = resGlass.data;
            const glassDate = [];
            const glassAmount = [];
            glass.forEach(element => {
                let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                glassDate.push(new_date);
                glassAmount.push(element.amount);
            });
            // Aluminium Can
            const aluminium = resAluminium.data;
            const aluminiumDate = [];
            const aluminiumAmount = [];
            aluminium.forEach(element => {
                let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                aluminiumDate.push(new_date);
                aluminiumAmount.push(element.amount);
            });
            // Paper
            const paper = resPaper.data;
            const paperDate = [];
            const paperAmount = [];
            paper.forEach(element => {
                let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                paperDate.push(new_date);
                paperAmount.push(element.amount);
            });
            // Plastic
            const plastic = resPlastic.data;
            const plasticDate = [];
            const plasticAmount = [];
            plastic.forEach(element => {
                let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                plasticDate.push(new_date);
                plasticAmount.push(element.amount);
            });

            setBinLine({
                labels: glassDate,
                datasets:[
                    {
                        label: 'Glass',
                        fill: false,
                        borderColor: 'rgba(25, 181, 254, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(25, 181, 254, 0.6)',
                        data: glassAmount,
                        lineTension: 0,
                        backgroundColor:[
                            'rgba(25, 181, 254, 0.6)',                            
                        ]
                    },
                    {
                        label: 'Aluminium Can',
                        fill: false,
                        borderColor: 'rgba(219, 10, 91, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(219, 10, 91, 0.6)',
                        lineTension: 0,
                        data: aluminiumAmount,
                        backgroundColor:[
                            'rgba(219, 10, 91, 0.6)',                            
                        ]
                    },
                    {
                        label: 'Paper',
                        fill: false,
                        borderColor: 'rgba(245, 229, 27, 0.6)',
                        pointBorderColor: "black",
                        pointBackgroundColor: 'rgba(245, 229, 27, 0.6)',
                        lineTension: 0,
                        data: paperAmount,
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
                        data: plasticAmount,
                        backgroundColor:[
                            'rgba(27, 163, 156, 0.6)'                                
                        ]
                    },
                            
                ]
            });
        };
        fetchData();
    }, []);

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
        <div id="BinGraph">
            <Line
            data = {binLine}
            options = {options}
            />
        </div>
    )
}
export default BinGraph;