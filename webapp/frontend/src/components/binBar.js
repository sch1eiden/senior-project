import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const API_URL = 'http://localhost:8000/api';
const level_url = `${API_URL}/level/`;
const garbage_url = `${API_URL}/garbage/`;

const BinBar = () => {
    const [binBar, setBinBar] = useState([]);
    
    useEffect(() => {

        const fetchData = async () => {
            const resGarbage = await axios(garbage_url);
            const resGlass = await axios(`${level_url}?garbage_id=1&ordering=-date_time_value`);
            const resAluminium = await axios(`${level_url}?garbage_id=2&ordering=-date_time_value`);
            const resPaper = await axios(`${level_url}?garbage_id=3&ordering=-date_time_value`);
            const resPlastic = await axios(`${level_url}?garbage_id=4&ordering=-date_time_value`);
            
            const garbage = resGarbage.data;
            const glass = resGlass.data;
            const aluminium = resAluminium.data;
            const paper = resPaper.data;
            const plastic = resPlastic.data;

            setBinBar({
                labels: [garbage[0].garbage_name, garbage[1].garbage_name, garbage[2].garbage_name, garbage[3].garbage_name],
                datasets: [
                    {
                        label: 'Bin Level',
                        data: [glass[0].level, aluminium[0].level, paper[0].level, plastic[0].level],
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
        <div id="BinBar">
            <Bar
            data = {binBar}
            options = {options}
            />
        </div>
    );
}
export default BinBar