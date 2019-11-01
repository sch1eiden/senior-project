import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Auth';
import firebase from '../firebase';

const db = firebase.firestore();

const Contact = (props) => {
    const {currentUser} = useContext(AuthContext);
    let maidData = []
    // let maidNames = []
    const getData = async () => {
        // await db.collection("contacts").where("type", "==", "maid").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         maidData.push(doc.data());
        //         maidNames.push(doc.data().name);
        //     })
        // })
        await db.collection("contacts").where("type", "==", "maid").get().then(querySnapshot => {
            maidData = querySnapshot.docs.map(doc => doc.data());
        })
        console.log('maidData', maidData)
    }

    useEffect(() => {
        getData();
    })
    
    

    const handleOnLogIn = () => {
        props.history.push('/login');
    }
    const handleOnSignUp = () => {
        props.history.push('/signup');
    }

    if(currentUser) {
        return (
            <div id="Contact" className="container-fluid">
                <h3 className="display-4">Contact</h3>
                
            </div>
        );
    } else {
        return (
            <div className="container-fluid" id="Contact" align="center">
                <h3 className="display-4">Contact</h3>
                <p align="center">You didn't sign in yet</p>
                <button className="btn btn-primary" onClick={handleOnLogIn}>Sign In</button>
                <p align="center">Didn't have account yet?</p>
                <button className="btn btn-secondary" onClick={handleOnSignUp}>Sign Up</button>
            </div>
        );
    }

}
export default Contact