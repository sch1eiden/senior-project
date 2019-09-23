import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
    render(){
        return (
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <Toggle />
                        <Nav defaultSelected="home">
                            <NavItem eventKey="">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="dashboard">
                                <NavIcon>
                                    <i className="fa fa-fw fa-pie-chart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Dashboard
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="contact">
                                <NavIcon>
                                    <i className="fa fa-fw fa-address-book" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Contact
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="users">
                                <NavIcon>
                                    <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Users
                                </NavText>
                            </NavItem>
                        </Nav>
                    </SideNav>
                </React.Fragment>
            )}
            />
        );
    }
}
export default Sidebar