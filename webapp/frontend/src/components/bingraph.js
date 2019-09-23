import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

class BinGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statisticData: {}
        }
    }
    
    componentDidMount() {
        this.getStatisticData();
    }

    getStatisticData() {
        const glassUrl = `${API_URL}/contain/?garbage_id=1`;
        const aluminiumUrl = `${API_URL}/contain/?garbage_id=2`;
        const paperUrl = `${API_URL}/contain/?garbage_id=3`;
        const plasticUrl = `${API_URL}/contain/?garbage_id=4`;
        
        let glassDate = [];
        let aluminiumDate = [];
        let paperDate = [];
        let plasticDate = [];

        let glassAmount = [];
        let aluminiumAmount = [];
        let paperAmount = [];
        let plasticAmount = [];

        axios.get(glassUrl)
            .then(res => {
                const garbage = res.data;
                garbage.forEach(element => {
                    let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                    glassDate.push(new_date);
                    glassAmount.push(element.amount);
                });
            });
        axios.get(aluminiumUrl)
            .then(res => {
                const garbage = res.data;
                garbage.forEach(element =>{
                    let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                    aluminiumDate.push(new_date);
                    aluminiumAmount.push(element.amount);
                });
            });
        axios.get(paperUrl)
            .then(res => {
                const garbage = res.data;
                garbage.forEach(element =>{
                    let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                    paperDate.push(new_date);
                    paperAmount.push(element.amount);
                });
            });
        axios.get(plasticUrl)
            .then(res => {
                const garbage = res.data;
                garbage.forEach(element =>{
                    let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
                    plasticDate.push(new_date);
                    plasticAmount.push(element.amount);
                });
            });

        this.setState({
            statisticData: {
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
            }
        });
        

        // const url = `${API_URL}/contain/`;
        // const garbage_url = `${API_URL}/garbage/`;
        // let garbageType = [];
        // axios.get(garbage_url)
        //     .then(res => {
        //         const garbages = res.data;
        //         garbages.forEach(element => {
        //             garbageType.push(element.garbage_name);
        //         });
        //     });
        // axios.get(url)
        //     .then(res => {
        //         const bin = res.data;
        //         let dates = [];
        //         let amounts = [];
        //         bin.forEach(element => {
        //             let new_date = moment(element.date_time_value).format('DD/MM/YYYY');
        //             dates.push(new_date);
        //             amounts.push(element.amount);
        //         });
        //         this.setState({
        //             statisticData: {
        //                 labels: dates,
        //                 datasets:[
        //                     {
        //                         label: 'Glass',
        //                         data: amounts,
        //                         backgroundColor:[
        //                             'rgba(25, 181, 254, 0.6)',                            
        //                         ]
        //                     },
        //                     {
        //                         label: 'Aluminium Can',
        //                         data: amounts,
        //                         backgroundColor:[
        //                             'rgba(219, 10, 91, 0.6)',                            
        //                         ]
        //                     },
        //                     {
        //                         label: 'Paper',
        //                         data: amounts,
        //                         backgroundColor:[
        //                             'rgba(245, 229, 27, 0.6)',
        //                         ]
        //                     },
        //                     {
        //                         label: 'Plastic',
        //                         data: amounts,
        //                         backgroundColor:[
        //                             'rgba(27, 163, 156, 0.6)'                                
        //                         ]
        //                     },
                            
        //                 ]
        //             }
        //         });
        //     });
    }

    render(){
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
                <Line
                data = {this.state.statisticData}
                options = {options}
                />
            </div>
        );
    }
}
export default BinGraph