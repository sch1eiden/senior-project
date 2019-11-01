import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import config from '../firebase';

const db = config.firestore();

const BinBar = () => {
    const [binBar, setBinBar] = useState([]);
    /* eslint-disable */
    const [level, setLevel] = useState({});
    const [title, setTitle] = useState({});
    
    useEffect(() => {
        const unsubscribe = db.collection('levels').onSnapshot(ss => {
            const level = {};
            const title = {};
            ss.forEach(document => {
                level[document.id] = document.data().level;
                title[document.id] = document.data().title;
            })
            setLevel(level);
            setTitle(title);
            console.log('level', level)
            const ctx = document.getElementById('canvas').getContext("2d");

            let gradientAlu = ctx.createLinearGradient(0, 0, 0, 400);
            gradientAlu.addColorStop(1, 'rgba(249, 105, 14, 0.6)');
            gradientAlu.addColorStop(0.5, 'rgba(249, 105, 14, 0.6)');
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
            setBinBar({
                labels: [title.aluminium, title.glass, title.paper, title.plastic],
                datasets: [
                    {
                        label: 'Bin Level',
                        data: [level.aluminium, level.glass, level.paper, level.plastic],
                        backgroundColor:[
                            gradientAlu,
                            gradientGlass,
                            gradientPaper,
                            gradientPlastic
                        ],
                    }
                ]
            });
        })
        return () => {
            unsubscribe()
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
        <div id="BinBar">
            <Bar
            id='canvas'
            data = {binBar}
            options = {options}
            />
        </div>
    );
}
export default BinBar