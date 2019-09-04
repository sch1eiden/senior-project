import React, { Component } from 'react';
class SideNav extends Component {
    render(){
        return (
            <div className="sidenav">
                <a href="#dash-board">Dashboard</a>
                <a href="#statistic">Statistic</a>
                <a href="#profile">Profile</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}
export default SideNav