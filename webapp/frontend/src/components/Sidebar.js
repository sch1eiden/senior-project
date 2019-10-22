import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import config from '../firebase';
import { Route } from 'react-router-dom';
import './sidebar.css';
import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
    const { currentUser } = useContext(AuthContext);
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
                    <Nav defaultSelected="">
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
                        <NavItem eventKey="profile">
                            <NavIcon>
                                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>
                        {currentUser ? (
                            <NavItem onClick={() => {config.auth().signOut()}} eventkey="">
                                <NavIcon>
                                    <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Sign Out
                                </NavText>
                            </NavItem>
                            
                        ) : (
                            <NavItem eventKey="login">
                                <NavIcon>
                                    <i className="fa fa-fw fa-sign-in" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Sign In
                                </NavText>
                            </NavItem>
                        )}
                        
                    </Nav>
                </SideNav>
            </React.Fragment>
        )}
        />
    );
};
export default Sidebar

// <NavItem eventKey="login">
//                             <NavIcon>
//                                 <i className="fa fa-fw fa-sign-in" style={{ fontSize: '1.75em' }} />
//                             </NavIcon>
//                             <NavText>
//                                 Sign In
//                             </NavText>
//                         </NavItem>
//                         <NavItem eventKey="signup">
//                             <NavIcon>
//                                 <i className="fa fa-fw fa-plus" style={{ fontSize: '1.75em' }} />
//                             </NavIcon>
//                             <NavText>
//                                 Sign Up
//                             </NavText>
//                         </NavItem>