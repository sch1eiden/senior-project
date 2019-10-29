import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const API = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/levels'

const BinBar = () => {
    const [binBar, setBinBar] = useState();
    const [refresh, setRefresh] = useState(false);
    
    const fetchData = async () => {
        const ctx = document.getElementById('canvas').getContext("2d");

        let gradientAlu = ctx.createLinearGradient(0, 0, 0, 400);
        gradientAlu.addColorStop(1, 'rgba(132, 135, 137, 0.6)');
        gradientAlu.addColorStop(0.5, 'rgba(132, 135, 137, 0.6)');
        gradientAlu.addColorStop(0, 'rgba(219, 10, 91, 1)');

        let gradientGlass = ctx.createLinearGradient(0, 0, 0, 400);
        gradientGlass.addColorStop(1, 'rgba(25, 181, 254, 0.6)');
        gradientGlass.addColorStop(0.5, 'rgba(25, 181, 254, 0.6)');
        gradientGlass.addColorStop(0, 'rgba(219, 10, 91, 1)');

        let gradientPaper = ctx.createLinearGradient(0, 0, 0, 400);
        gradientPaper.addColorStop(1, 'rgba(245, 229, 27, 0.6)');
        gradientPaper.addColorStop(0.5, 'rgba(245, 229, 27, 0.6)');
        gradientPaper.addColorStop(0, 'rgba(219, 10, 91, 1)');
        
        let gradientPlastic = ctx.createLinearGradient(0, 0, 0, 400);
        gradientPlastic.addColorStop(1, 'rgba(27, 163, 156, 0.6)');
        gradientPlastic.addColorStop(0.5, 'rgba(27, 163, 156, 0.6)');
        gradientPlastic.addColorStop(0, 'rgba(219, 10, 91, 1)');

        const resData = await axios(API);
        const level = [];
        const title = [];

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
                        gradientAlu,
                        gradientGlass,
                        gradientPaper,
                        gradientPlastic
                    ],
                }
            ]
        });
    };
    useEffect(() => {
        fetchData();
        setRefresh(false);
    }, [refresh]);
    
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

    const handleRefresh = () => {
        setRefresh(true)
    }

    return (
        <div id="BinBar">
            <Bar
            id='canvas'
            data = {binBar}
            options = {options}
            />
            <button className="btn btn-secondary" onClick={handleRefresh}>Refresh</button>
        </div>
    );
}
export default BinBar