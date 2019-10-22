import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const API_URL = 'https://firestore.googleapis.com/v1/projects/smart-bin-615ec/databases/(default)/documents/amounts';
const GLASS_API = `${API_URL}/glass/days`;
const ALUMINIUM_API = `${API_URL}/aluminium/days`;
const PAPER_API = `${API_URL}/paper/days`;
const PLASTIC_API = `${API_URL}/plastic/days`;

const BinGraph = () => {
    const [binLine, setBinLine] = useState();
    const [refresh, setRefresh] = useState(false);

    const fetchData = async () => {
        const resGlass = await axios(GLASS_API);
        const resAluminium = await axios(ALUMINIUM_API);
        const resPaper = await axios(PAPER_API);
        const resPlastic = await axios(PLASTIC_API);

        // Glass
        const glass = resGlass.data.documents;
        const glassDate = [];
        const glassAmount = [];
        glass.forEach(element => {
            let new_date = moment(element.fields.date.timestampValue).format('DD/MM/YYYY');
            glassDate.push(new_date);
            glassAmount.push(element.fields.amount.integerValue);
        });
        // Aluminium Can
        const aluminium = resAluminium.data.documents;
        const aluminiumDate = [];
        const aluminiumAmount = [];
        aluminium.forEach(element => {
            let new_date = moment(element.fields.date.timestampValue).format('DD/MM/YYYY');
            aluminiumDate.push(new_date);
            aluminiumAmount.push(element.fields.amount.integerValue);
        });
        // Paper
        const paper = resPaper.data.documents;
        const paperDate = [];
        const paperAmount = [];
        paper.forEach(element => {
            let new_date = moment(element.fields.date.timestampValue).format('DD/MM/YYYY');
            paperDate.push(new_date);
            paperAmount.push(element.fields.amount.integerValue);
        });
        // Plastic
        const plastic = resPlastic.data.documents;
        const plasticDate = [];
        const plasticAmount = [];
        plastic.forEach(element => {
            let new_date = moment(element.fields.date.timestampValue).format('DD/MM/YYYY');
            plasticDate.push(new_date);
            plasticAmount.push(element.fields.amount.integerValue);
        });

        setBinLine({
            labels: glassDate,
            datasets:[
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
                        'rgba(27, 163, 156, 0.6)',
                    ]
                },
            ]
        });
    };
    useEffect(() => {
        fetchData();
        setRefresh(false);
    }, [refresh]);

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
    const handleRefresh = () => {
        setRefresh(true)
    }

    return (
        <div id="BinGraph">
            <Line
            data = {binLine}
            options = {options}
            />
            <button className="btn btn-secondary" onClick={handleRefresh}>Refresh</button>
        </div>
    )
}
export default BinGraph;