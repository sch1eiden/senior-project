import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels'

const BinBar = () => {
    const [binBar, setBinBar] = useState([]);
    useEffect(() => {

        const fetchData = async () => {

            const resData = await axios(API);
            const level = []
            const title = []
            resData.data.documents.forEach(element => {
                level.push(element.fields.level.integerValue);
                title.push(element.fields.title.stringValue);
            });
            setBinBar({
                labels: title,
                datasets: [
                    {
                        label: 'Bin Level',
                        data: level,
                        backgroundColor:[
                            'rgba(219, 10, 91, 0.6)',
                            'rgba(25, 181, 254, 0.6)',
                            'rgba(245, 229, 27, 0.6)',
                            'rgba(27, 163, 156, 0.6)'
                        ],
                    }
                ]
            });
        };
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