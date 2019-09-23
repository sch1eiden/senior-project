import React, {Component} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const API_URL = 'http://localhost:8000/api';

class BinChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binData: {}
        }
    }

    componentDidMount() {
        this.getBinData();
    }

    getBinData () {
        const url = `${API_URL}/contain/?ordering=-date_time_value`;
        const garbage_url = `${API_URL}/garbage/`;
        let garbageType = [];
        axios.get(garbage_url)
            .then(res => {
                const garbages = res.data;
                garbages.forEach(element => {
                    garbageType.push(element.garbage_name);
                });
            });
        axios.get(url)
            .then(res => {
                const bin = res.data;
                let levels = [];
                bin.forEach(element => {
                    levels.push(element.level);
                });
                this.setState({
                    binData: {
                        labels: garbageType,
                        datasets:[
                            {
                                label:'Bin Level',
                                data: levels,
                                backgroundColor:[
                                    'rgba(25, 181, 254, 0.6)',
                                    'rgba(219, 10, 91, 0.6)',
                                    'rgba(245, 229, 27, 0.6)',
                                    'rgba(27, 163, 156, 0.6)'                                
                                ]
                            },
                        ]
                    }
                });
            });
    }

    render() {
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
            <div>
                <Bar
                data = {this.state.binData}
                options = {options}
                    />
            </div>
        );
    }
}

export default BinChart